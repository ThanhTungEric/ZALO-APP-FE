import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, Modal, Platform, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Import các icon cần sử dụng
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Hook để sử dụng các hàm điều hướng của React Navigation
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sendMessageRoute, recieveMessageRoute, uploadImageRoute, deleteMessageRoute } from '../../router/APIRouter';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
// import { set } from 'firebase/database';
// import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import { COLORS, FONTS } from '../../constrants/theme';
import { useTranslation } from 'react-i18next';


const ChatBox = ({ route }) => {
    const { selectedChat, socket } = route.params;
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState('');
    const scrollViewRef = useRef();
    const scrollRef = useRef();
    const screenWidth = Dimensions.get('window').width;
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [image, setImage] = useState(null);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const { t } = useTranslation('chat');


    const getMessages = async () => {
        const data = JSON.parse(await AsyncStorage.getItem('userData'));
        const reponse = await axios.post(recieveMessageRoute, {
            from: data._id,
            to: selectedChat._id
        });
        setMessages(reponse.data);
        console.log("day la tin nhan", reponse.data)
    }

    useEffect(() => {
        if (selectedChat) {
            getMessages();
        }
    }, [selectedChat]);

    useEffect(() => {
        const getCurrentChat = async () => {
            if (selectedChat) {
                await JSON.parse(await AsyncStorage.getItem('userData'))._id;
            }
        }
        getCurrentChat();
    }, [selectedChat]);

    const handleSendMsg = async msg => {
        const data = JSON.parse(await AsyncStorage.getItem('userData'));
        socket.current.emit("send-msg", {
            to: selectedChat._id,
            from: data._id,
            msg,
        });
        await axios.post(sendMessageRoute, {
            from: data._id,
            to: selectedChat._id,
            message: msg,
        });

        const msgs = [...messages];
        msgs.push({ fromSelf: true, message: msg });
        setMessages(msgs);
    };

    const sendChat = async (message) => {
        if (image) {
            sendImage();
            setMsg('');
        } else if (file) {
            sendFile();
            setMsg('');
            setFile(null);
        }
        else if (message) {
            handleSendMsg(message);
            setMsg('');
            console.log('message', message);
        }
    }

    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-recieve", (msg) => {
                setArrivalMessage({ fromSelf: false, message: msg });
            });
        }
    }, []);

    useEffect(() => {
        arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const handleNavigateToOptions = () => {
        // Điều hướng đến màn hình option
        navigation.navigate('Option', { selectedChat: selectedChat });
    };

    const handleNavigateToCall = () => {
        // Điều hướng đến màn hình call
        navigation.navigate('Call', { selectedChat: selectedChat });
    };

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (libraryStatus.status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }

                const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
                if (cameraStatus.status !== 'granted') {
                    alert('Sorry, we need camera permissions to make this work!');
                }
            }
        })();
    }, []);

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
    //api get only uri of image
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

    // Hàm xử lý khi nhấn giữ tin nhắn
    const handleLongPress = (message) => {
        setSelectedMessage(message);
        console.log('Tin nhắn đã được chọn', message);
        setTimeout(() => {
            setIsOptionsVisible(true);
        }, 1000);
    };

    const handleDeleteMessage = () => {
        deleteMessageById(selectedMessage._id);
        setIsOptionsVisible(false);
        setSelectedMessage(null);
    };

    const handleForwardMessage = () => {
        // Xử lý chuyển tiếp tin nhắn
        navigation.navigate('Forward', { message: selectedMessage, socket: socket });
        setIsOptionsVisible(false);
        console.log('Chuyển tiếp tin nhắn', selectedMessage);
    };

    // Hàm để chọn file từ thư viện tài liệu
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

    // send file
    const sendFile = async () => {
        try {
            const formData = new FormData();
            let fileType = '';

            if (file.endsWith('.pdf')) {
                fileType = 'application/pdf';
            } else if (file.endsWith('.docx')) {
                fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            } else if (file.endsWith('.txt')) {
                fileType = 'text/plain';
            }

            formData.append('file', {
                uri: file,
                type: fileType,
                name: fileName,
            });

            const response = await axios.post(uploadImageRoute, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('file uploaded', response.data);
            const fileUrl = response.data;

            await handleSendMsg(fileUrl);
            setFile(null);
            setFileName(null);
        } catch (error) {
            console.log('error upload file', error);
        }
    };


    const deleteMessageById = async messageId => {
        socket.current.emit('delete-msg', { messageId })
        const url = `${deleteMessageRoute}/${messageId}`
        try {
            const response = await axios.delete(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('Tin nhắn đã được xóa thành công', response.data)
        } catch (error) {
            console.error('Lỗi khi xóa tin nhắn:', error.message)
        }
    }
    useEffect(() => {
        if (socket.current) {
            socket.current.on('msg-delete', data => {
                const { messageId } = data
                setMessages(prevMessages =>
                    prevMessages.filter(message => message._id !== messageId)
                )
                console.log('Đã xóa tin nhắn từ danh sách hiển thị')
            })
        }
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, color: COLORS.secondaryWhite }}>
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 22, backgroundColor: COLORS.white, height: 60, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8 }}>{selectedChat.fullName}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={handleNavigateToCall} style={{ marginRight: 8 }}>
                        <MaterialIcons name="call" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNavigateToOptions} style={{ marginRight: 8 }}>
                        <MaterialIcons name="menu" size={24} color={COLORS.black} />
                    </TouchableOpacity> 
                </View>
            </View>
            {/* ScrollView cho nội dung tin nhắn */}
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
                    placeholder={t('enter message')}
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

                <TouchableOpacity onPress={() => sendChat(msg)} style={styles.sendButton}>
                    <Text style={{ color: 'white' }}> {t('send')} </Text>
                </TouchableOpacity>

                {/* Modal tùy chọn */}
                <Modal visible={isOptionsVisible} animationType="slide" style={styles.modalContainer} transparent >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={handleDeleteMessage} style={styles.modalButton}>
                            <Text> {t('delete message')} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleForwardMessage} style={styles.modalButton}>
                            <Text>{t('forward message')}</Text>
                        </TouchableOpacity>
                        {/* Thêm các tùy chọn khác tại đây */}
                        <TouchableOpacity onPress={() => setIsOptionsVisible(false)} style={styles.modalButton}>
                            <Text> {t('cancel')} </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        </SafeAreaView>
    )
}
export default ChatBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
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