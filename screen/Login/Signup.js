import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import axios from 'axios';  

const Signup = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/', {
                fullName,
                phoneNumber,
                email,
                birthDate,
                password,
                status,
            });

            if (response.status === 201) {
                // Đăng ký thành công
                console.log('Đăng ký thành công', response.data);

                // Thực hiện các xử lý khác, ví dụ: chuyển hướng đến trang đăng nhập
                navigation.navigate('Login', { phoneNumber: phoneNumber });
            } else {
                // Xử lý đăng ký thất bại
                console.error('Đăng ký thất bại', response.data);
            }
        } catch (error) {
            // Xử lý lỗi kết nối hoặc lỗi từ server
            console.error('Đã xảy ra lỗi:', error.message);
        }
    };

    return (
        <View style={styles.container}>
             <View style={{ width: '100%', height: 50, backgroundColor: "#18A0FB", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={{ fontWeight: '600', color: 'white', left: 20, fontSize: 18 }}>Đăng ký</Text>
            </View>
            <TextInput
                placeholder='Họ và tên'
                placeholderTextColor={'#18A0FB'}
                style={styles.input}
                onChangeText={(text) => setFullName(text)}
            />

            <TextInput
                placeholder='Số điện thoại'
                placeholderTextColor={'#18A0FB'}
                style={styles.input}
                onChangeText={(text) => setPhoneNumber(text)}
            />

            <TextInput
                placeholder='Email'
                placeholderTextColor={'#18A0FB'}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder='Ngày sinh'
                placeholderTextColor={'#18A0FB'}
                style={styles.input}
                onChangeText={(text) => setBirthDate(text)}
            />

            <TextInput
                placeholder='Mật khẩu'
                placeholderTextColor={'#18A0FB'}
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                placeholder='Trạng thái'
                placeholderTextColor={'#18A0FB'}
                style={styles.input}
                onChangeText={(text) => setStatus(text)}
            />

            <TouchableOpacity
                onPress={handleSignup}
                style={styles.button}>
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>

            

        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 10,
        height: 50,
        width: '90%',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#18A0FB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
    },
});
