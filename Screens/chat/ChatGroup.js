import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, Modal, Platform, Image, SafeAreaView } from 'react-native';
import axios from 'axios';
import { COLORS, FONTS } from '../../constrants/theme';
import { getMessagesGroup, sendMessageGroup, uploadImageRoute } from '../../router/APIRouter';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Import các icon cần sử dụng
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { get } from 'firebase/database';

const ChatGroup = ({ route }) => {
    const { group, socket } = route.params;
    const [messages, setMessages] = useState([]);
    const scrollViewRef = React.useRef();
    const [msg, setMsg] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [image, setImage] = useState(null);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const screenWidth = Dimensions.get('window').width;
    const [arrivalMessage, setArrivalMessage] = useState(null)
    console.log('group', group);

    useEffect(() => {
        if (socket.current) {
            socket.current.emit('join-room', { groupId: group._id })
            console.log('join-room', group._id);
        }
    }, [group]);

    //getMessagesGroup
    const getMessages = async () => {
        const data = JSON.parse(await AsyncStorage.getItem('userData'));
        try {
            const response = await axios.post(getMessagesGroup, {
                groupId: group._id,
                userId: data._id
            })
            setMessages(response.data)
            console.log('Tin nhắn:', response.data)
        }
        catch (error) {
            console.error('Lỗi khi lấy tin nhắn:', error.message)
            setMessages([]);
        }
    }
    useEffect(() => {
        getMessages()
    }, [group])

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync();
            if (result.type !== 'cancel') {
                console.log(result.assets[0].name);
                console.log(result.assets[0].uri);
                setFile(result.assets[0].uri);
                setFileName(result.assets[0].name);
            } else if (result.type == 'cancel') {
                console.log("User canceled the document picker");
            }
        } catch (error) {
            console.log("Error picking file: ", error);
        }
    };

    const handleSendMsg = async msg => {
        const data = JSON.parse(await AsyncStorage.getItem('userData'));
        try {
            console.log('groupid', group._id);
            socket.current.emit('send-group-msg', {
                from: data._id,
                groupId: group._id,
                msg
            })
            await axios.post(`${sendMessageGroup}/${group._id}`, {
                from: data._id,
                to: group._id,
                message: msg
            });
            const msgs = [...messages];
            msgs.push({ fromSelf: true, message: msg });
            setMessages(msgs);
            getMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const sendChat = async (msg) => {
        if (image) {
            sendImage();
            setMsg('');
        }   else if (msg) {
            handleSendMsg(msg);
            setMsg('');
            console.log('message', msg);
        }
    };
    const sendImage = async () => {
        try {
            const formData = new FormData();
            let fileType = 'image/jpeg';

            if (image.endsWith('.png')) {
                fileType = 'image/png';
            }
            formData.append('file', {
                uri: image,
                type: fileType,
                name: 'image.' + (fileType === 'image/jpeg' ? 'jpg' : 'png'),
            });

            const response = await axios.post(uploadImageRoute, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('file uploaded', response.data);
            const imageUrl = response.data;

            await handleSendMsg(imageUrl);
            setImage(null);
        } catch (error) {
            console.log('error upload image', error);
        }
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
        }
    };

    // Hàm xử lý khi nhấn giữ tin nhắn
    const handleLongPress = (message) => {
        setSelectedMessage(message);
        console.log('Tin nhắn đã được chọn', message);
        setTimeout(() => {
            setIsOptionsVisible(true);
        }, 1000);
    };
    useEffect(() => {
        if (socket.current) {
            socket.current.on('recieve-group-msg', data => {
                setArrivalMessage({
                    message: data.msg,
                    sender: data.from,
                    groupId: data.groupId
                })
            })
        }
    }, [])
    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{group.groupName}</Text>
            </View>
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                contentContainerStyle={{ alignItems: 'flex-start' }}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {messages.map((msg, index) => (
                    <TouchableOpacity key={index}
                        onLongPress={() => handleLongPress(msg)}
                        style={[styles.messageContainer, { alignSelf: msg.fromSelf ? 'flex-end' : 'flex-start' }]}>
                        <View style={[styles.messageBubble, { backgroundColor: msg.fromSelf ? '#574E92' : '#ccc', maxWidth: screenWidth * 0.7 }]}>
                            {msg.message.includes('.jpg') || msg.message.includes('.png') ? (
                                <Image resizeMode='contain' source={{ uri: msg.message }} style={{ width: 200, height: 200, borderRadius: 10, marginVertical: 5 }} />
                            ) : msg.message.includes('.pdf') ? (
                                <TouchableOpacity onPress={() => handleFileDownload(msg.message)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="file-pdf-o" size={24} color="red" />
                                    <Text style={{ marginLeft: 5 }}>{msg.message.split('/').pop()}</Text>
                                </TouchableOpacity>
                            ) : msg.message.includes('.docx') ? (
                                <TouchableOpacity onPress={() => handleFileDownload(msg.message)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="file-word-o" size={24} color="blue" />
                                    <Text style={{ marginLeft: 5 }}>{msg.message.split('/').pop()}</Text>
                                </TouchableOpacity>
                            ) : msg.message.includes('.txt') ? (
                                <TouchableOpacity onPress={() => handleFileDownload(msg.message)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome name="file-text-o" size={24} color="green" />
                                    <Text style={{ marginLeft: 5 }}>{msg.message.split('/').pop()}</Text>
                                </TouchableOpacity>
                            ) : (
                                <Text style={{ color: msg.fromSelf ? 'white' : 'black' }}>{msg.message}</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                ))}

            </ScrollView>

            {/* Box chat */}
            <View style={styles.chatBox}>
                {/* Ô nhập tin nhắn */}
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tin nhắn..."
                    value={msg}
                    onChangeText={setMsg}
                    multiline
                />
                <TouchableOpacity
                    onPress={pickImage}
                    style={styles.imageButton}>
                    <FontAwesome name="image" size={24} color="#574E92" />
                </TouchableOpacity>

                {/* Nút chọn file */}
                <TouchableOpacity
                    onPress={pickDocument}
                    style={styles.imageButton}
                >
                    <FontAwesome name="file" size={24} color="#574E92" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sendChat(msg)}

                    style={styles.sendButton}>
                    <Text style={{ color: 'white' }}>Gửi</Text>
                </TouchableOpacity>

                {/* Modal tùy chọn */}
                <Modal visible={isOptionsVisible} animationType="slide" style={styles.modalContainer} transparent >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity
                            //onPress={handleDeleteMessage} 
                            style={styles.modalButton}>
                            <Text>Xóa tin nhắn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            //onPress={handleForwardMessage} 
                            style={styles.modalButton}>
                            <Text>Chuyển tiếp tin nhắn</Text>
                        </TouchableOpacity>
                        {/* Thêm các tùy chọn khác tại đây */}
                        <TouchableOpacity onPress={() => setIsOptionsVisible(false)} style={styles.modalButton}>
                            <Text>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryWhite,
    },
    header: {
        backgroundColor: COLORS.white,
        padding: 10,
        elevation: 4,
    },
    headerText: {
        ...FONTS.h4,
    },
    messageContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyMessageText: {
        ...FONTS.body3,
        color: COLORS.gray,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    chatBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#574E92',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    messageContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    messageBubble: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        width: 'auto',
    },
    emoji: {
        fontSize: 24,
        margin: 5,
    },
    closeButton: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 10,
    },
    imageButton: {
        margin: 10,
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'gray',
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    modalButton: {
        backgroundColor: 'white',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
});

export default ChatGroup;
