import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, Modal, FlatList, Platform, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Import các icon cần sử dụng
import { AntDesign } from '@expo/vector-icons'; // Import icon AntDesign
import { useNavigation } from '@react-navigation/native'; // Hook để sử dụng các hàm điều hướng của React Navigation
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sendMessageRoute, recieveMessageRoute, uploadImageRoute, deleteMessageRoute } from '../../router/APIRouter';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { set } from 'firebase/database';
import * as DocumentPicker from 'expo-document-picker';

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
        getMessages();
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
        setIsOptionsVisible(false);
    };

    // Hàm để chọn file từ thư viện tài liệu
    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync();
            if (result.type !== 'cancel') {
                console.log(result.assets[0].uri);
                setFile(result.assets[0].uri);
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
        <View style={styles.container}>
            {/* Header */}
            <View style={{ width: '100%', height: 70, paddingTop: 25, backgroundColor: "#574E92", flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.navigate('Message')} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '600', color: 'white', fontSize: 18 }}>{selectedChat.fullName}</Text>
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
                            ) : msg.message.includes('.pdf') || msg.message.includes('.docx') || msg.message.includes('.txt') ? (
                                <View style={{ backgroundColor: 'lightgray', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                                    <Text>{msg.message}</Text>
                                </View>
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

                <TouchableOpacity onPress={() => sendChat(msg)} style={styles.sendButton}>
                    <Text style={{ color: 'white' }}>Gửi</Text>
                </TouchableOpacity>

                {/* Modal tùy chọn */}
                <Modal visible={isOptionsVisible} animationType="slide" style={styles.modalContainer} transparent >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={handleDeleteMessage}>
                            <Text>Xóa tin nhắn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleForwardMessage}>
                            <Text>Gỡ tin nhắn</Text>
                        </TouchableOpacity>
                        {/* Thêm các tùy chọn khác tại đây */}
                        <TouchableOpacity onPress={() => setIsOptionsVisible(false)}>
                            <Text>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        </View>
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
});