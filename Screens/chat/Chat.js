import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useRef, useEffect } from "react";
import { useRoute } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Import các icon cần sử dụng

const ChatBox = ({ route }) => {
    const { item } = route.params; // Nhận item từ params

    const [messages, setMessages] = useState([]); // State để lưu trữ danh sách tin nhắn
    const [message, setMessage] = useState(''); // State để lưu trữ nội dung tin nhắn

    const scrollViewRef = useRef();

    const screenWidth = Dimensions.get('window').width;

    const sendMessage = () => {
        // Gửi tin nhắn đi (có thể gửi thông qua API hoặc xử lý tại đây)
        const newMessages = [...messages, { content: message, sender: 'self' }];
        setMessages(newMessages);
        setMessage('');

        // Cuộn ScrollView lên đầu khi gửi tin nhắn mới
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    useEffect(() => {
        // Mô phỏng việc nhận tin nhắn từ người khác
        const receivedMessage = setTimeout(() => {
            const newMessages = [...messages, { content: 'Võ Sang Đẹp Zai :)', sender: 'other' }];
            setMessages(newMessages);

            // Cuộn ScrollView lên đầu khi có tin nhắn mới
            scrollViewRef.current.scrollToEnd({ animated: true });
        }, 10000); // Mô phỏng sau 10 giây nhận được tin nhắn
        return () => clearTimeout(receivedMessage);
    }, [messages]); // Khi messages thay đổi, tức có tin nhắn mới, sẽ gọi lại useEffect

    // Hàm xử lý khi người dùng nhấn vào nút gửi file
    const sendFile = () => {
        // Xử lý gửi file ở đây
        console.log("Đã gửi file");
    };

    // Hàm xử lý khi người dùng nhấn vào nút gửi icon
    const sendIcon = () => {
        // Xử lý gửi icon ở đây
        console.log("Đã gửi icon");
    };

    // Hàm xử lý khi người dùng nhấn vào nút gửi sticker
    const sendSticker = () => {
        // Xử lý gửi sticker ở đây
        console.log("Đã gửi sticker");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{ width: '100%', height: 50, backgroundColor: "#574E92", flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontWeight: '600', color: 'white', fontSize: 18 }}>{item.name}</Text>
            </View>

            {/* ScrollView cho nội dung tin nhắn */}
            <ScrollView
                ref={scrollViewRef}
                style={styles.scrollView}
                contentContainerStyle={{ alignItems: 'flex-start' }}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            >
                {messages.map((msg, index) => (
                    <View key={index} style={[styles.messageContainer, { alignSelf: msg.sender === 'self' ? 'flex-end' : 'flex-start' }]}>
                        <View style={[styles.messageBubble, { backgroundColor: msg.sender === 'self' ? '#574E92' : '#ccc', maxWidth: screenWidth * 0.7 }]}>
                            <Text style={{ color: msg.sender === 'self' ? 'white' : 'black' }}>{msg.content}</Text>
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
                    value={message}
                    onChangeText={setMessage}
                    multiline
                />
                {/* Nút gửi file */}
                <TouchableOpacity onPress={sendFile}>
                    <MaterialIcons name="attach-file" size={24} color="#574E92" />
                </TouchableOpacity>
                {/* Nút gửi icon */}
                <TouchableOpacity onPress={sendIcon}>
                    <FontAwesome name="smile-o"
                        size={24} color="#574E92" />
                </TouchableOpacity>
                {/* Nút gửi sticker /}
                <TouchableOpacity onPress={sendSticker}>
                <FontAwesome name="sticky-note-o" size={24} color="#574E92" />
                </TouchableOpacity>
                {/ Button gửi tin nhắn */}
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
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
});