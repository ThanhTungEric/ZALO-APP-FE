import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, Modal, Image, Alert } from 'react-native';
import axios from 'axios';
import { COLORS, FONTS } from '../../constrants/theme';
import { getMessagesGroup, sendMessageGroup, uploadImageRoute, getGroupMemberRoute, deleteMessageGroupRoute, recallMessageGroupRoute } from '../../router/APIRouter';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Import các icon cần sử dụng
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    const [memberGroup, setMemberGroup] = useState([]);
    const [avatar, setAvatar] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const navigation = useNavigation();
    const { t } = useTranslation('chat');
    console.log('group', group);

    useEffect(() => {
        if (socket.current) {
            socket.current.emit('join-room', { groupId: group._id })
            console.log('join-room', group._id);
        }
    }, [group]);

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
                name: file.split('/').pop(),
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
        } catch (error) {
            console.log('error upload file', error);
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
        } else if (msg) {
            handleSendMsg(msg);
            setMsg('');
            console.log('message', msg);
        } else if (file) {
            sendFile();
            setMsg('');
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

    const getMemberGroup = async () => {
        try {
            const response = await axios.get(`${getGroupMemberRoute}/${group._id}`)
            setMemberGroup(response.data)
            // map avatar
            const avatar = response.data.map((item) => {
                return { avatar: item.avatar, _id: item._id, name: item.fullName }
            })
            setAvatar(avatar)
            console.log('avatar', avatar)
            console.log('Thành viên nhóm:', response.data)
        }
        catch (error) {
            console.error('Lỗi khi lấy thành viên nhóm:', error.message)
        }
    }

    useEffect(() => {
        getMemberGroup()
    }, [group])

    useEffect(() => {
        const getCurrentChat = async () => {
            if (group) {
                await JSON.parse(localStorage.getItem('user'))._id
            }
        }
        getCurrentChat()
    }, [group])

    const deleteMessageById = async messageId => {
        socket.current.emit('delete-msg', { messageId })
        const url = `${deleteMessageGroupRoute}/${messageId}`
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

    const handleDeleteMessage = () => {
        Alert.alert('Xác nhận', 'Bạn có chắc chắn muốn xóa tin nhắn này không???', [
            {
                text: 'Hủy',
                onPress: () => console.log('Hủy xóa tin nhắn'),
                style: 'cancel'
            },
            {
                text: 'Xóa',
                onPress: () => deleteMessageById(selectedMessage._id)
            }
        ])

        setIsOptionsVisible(false);
        setSelectedMessage(null);
    };

    const [userData, setUserData] = useState('');

    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('userData');
            if (value !== null) {
                const parsUser = JSON.parse(value);
                setUserData(parsUser);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, [userData._id]);

    const handleOptionsGroup = (group) => {
        navigation.navigate('OptionGroup', { group, userData, socket });
    };

 
    const handleForwardMessage = () => { 
        // Xử lý chuyển tiếp tin nhắn
        navigation.navigate('Forward', { message: selectedMessage, socket: socket });
        setIsOptionsVisible(false);
        console.log('Chuyển tiếp tin nhắn', selectedMessage);
    };

    //API recall message with messageId and socket
    const recallMessageById = async messageId => {
        socket.current.emit('recall-group-msg', { messageId })
        const url = `${recallMessageGroupRoute}/${messageId}`
        try {
            const response = await axios.put(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('Tin nhắn đã được thu hồi', response.data)
            getMessages();
        } catch (error) {
            console.error('Lỗi khi thu hồi tin nhắn:', error.message)
        }
    }
    useEffect(() => {
        getMessages();
    }, [selectedMessage]);
    
    const handleRecallMessage = async () => {
        if (selectedMessage) {
            try {
                await recallMessageById(selectedMessage._id);
                setIsOptionsVisible(false);
                setSelectedMessage(null);
            } catch (error) {
                console.error('Lỗi khi thu hồi tin nhắn:', error.message);
            }
        }
    };
    socket.current.on('group-msg-recall', data => {
        const { messageId } = data;
        const recalledMessageIndex = messages.findIndex(message => message._id === messageId);
        if (recalledMessageIndex !== -1) {
            setMessages(prevMessages => {
                const updatedMessages = [...prevMessages];
                updatedMessages[recalledMessageIndex] = { ...updatedMessages[recalledMessageIndex], recalled: true };
                return updatedMessages;
            });
        }
    });



    useEffect(() => { 
        if (socket.current) {
            socket.current.on('group-msg-recall', data => {
                const { messageId } = data
                setMessages(prevMessages =>
                    prevMessages.map(message =>
                        message._id === messageId ? { ...message, recalled: true } : message
                    )
                )
            })

        }
        // Cleanup: ngừng lắng nghe khi component unmount
        return () => {
            if (socket.current) {
                socket.current.off('group-msg-recall')
            }
        }
    }, [socket.current])


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 22, backgroundColor: COLORS.white, height: 60 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8 }}>{group.groupName}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => handleOptionsGroup(group)} style={{ marginRight: 8 }}>
                        <MaterialIcons name="menu" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                contentContainerStyle={{ alignItems: 'flex-start' }}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {messages.map((msg, index) => (
                    <TouchableOpacity
                        key={index}
                        onLongPress={() => handleLongPress(msg)}
                        style={[styles.messageContainer, { alignSelf: msg.fromSelf ? 'flex-end' : 'flex-start' }]}
                    >
                        {(!msg.fromSelf && avatar.length > 0 && avatar.find(member => member._id === msg.sender)) && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                                <Image source={{ uri: avatar.find(member => member._id === msg.sender).avatar }} style={{ width: 30, height: 30, borderRadius: 15, marginRight: 5 }} />
                                <Text>{avatar.find(member => member._id === msg.sender).name}</Text>
                            </View>
                        )}
                        <View style={[styles.messageBubble, { backgroundColor: msg.fromSelf ? '#574E92' : '#ccc', maxWidth: screenWidth * 0.7 }]}>
                            {msg.message === "" ? (
                                <Text style={{ color: 'red', fontStyle: 'italic' }}>Tin nhắn đã được thu hồi</Text>
                            ) : msg.message.includes('.jpg') || msg.message.includes('.png') ? (
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

                <TouchableOpacity
                    onPress={() => sendChat(msg)}

                    style={styles.sendButton}>
                    <Text style={{ color: 'white' }}> {t('send')} </Text>
                </TouchableOpacity>

                {/* Modal tùy chọn */}
                <Modal visible={isOptionsVisible} animationType="slide" style={styles.modalContainer} transparent >
                    <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={handleRecallMessage} style={styles.modalButton}>
                            <Text> {t('recall message')} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleDeleteMessage}
                            style={styles.modalButton}>
                            <Text>{t('delete message')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleForwardMessage}
                            style={styles.modalButton}>
                            <Text>{t('forward message')}</Text>
                        </TouchableOpacity>
                        {/* Thêm các tùy chọn khác tại đây */}
                        <TouchableOpacity onPress={() => setIsOptionsVisible(false)} style={styles.modalButton}>
                            <Text>{t('cancel')}</Text>
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
