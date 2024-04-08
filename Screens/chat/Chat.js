import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, Modal, FlatList } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Import các icon cần sử dụng
import { AntDesign } from '@expo/vector-icons'; // Import icon AntDesign
import { useNavigation } from '@react-navigation/native'; // Hook để sử dụng các hàm điều hướng của React Navigation
import AsyncStorage from '@react-native-async-storage/async-storage'
import { sendMessageRoute, recieveMessageRoute } from '../../router/APIRouter';
import axios from 'axios';

const ChatBox = ({ route }) => {
    const { selectedChat, socket } = route.params;
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState('');
    const scrollViewRef = useRef();
    const scrollRef = useRef();
    const screenWidth = Dimensions.get('window').width;
    const [arrivalMessage, setArrivalMessage] = useState(null);

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

    const handleSendMsg = async (message) => {
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
        if (message) {
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
                    <View key={index} style={[styles.messageContainer, { alignSelf: msg.fromSelf ? 'flex-end' : 'flex-start' }]}>
                        <View style={[styles.messageBubble, { backgroundColor: msg.fromSelf ? '#574E92' : '#ccc', maxWidth: screenWidth * 0.7 }]}>
                            <Text style={{ color: msg.fromSelf ? 'white' : 'black' }}>{msg.message}</Text>
                        </View>
                    </View>
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

                <TouchableOpacity onPress={() => sendChat(msg)} style={styles.sendButton}>
                    <Text style={{ color: 'white' }}>Gửi</Text>
                </TouchableOpacity>
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
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
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
});
