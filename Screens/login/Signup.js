import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import React, { useState } from "react";
import axios from 'axios'; 
import {register} from '../../router/APIRouter';

const Signup = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post(`${register}`, {
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
             <View style={{ width: '100%', height: 50, backgroundColor: "#fff", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                </Pressable>
            </View>
            <TextInput
                placeholder='Họ và tên'
                placeholderTextColor={'#574E92'}
                style={styles.input}
                onChangeText={(text) => setFullName(text)}
            />

            <TextInput
                placeholder='Số điện thoại'
                placeholderTextColor={'#574E92'}
                style={styles.input}
                onChangeText={(text) => setPhoneNumber(text)}
            />

            <TextInput
                placeholder='Email'
                placeholderTextColor={'#574E92'}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder='Ngày sinh'
                placeholderTextColor={'#574E92'}
                style={styles.input}
                onChangeText={(text) => setBirthDate(text)}
            />

            <TextInput
                placeholder='Mật khẩu'
                placeholderTextColor={'#574E92'}
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                placeholder='Trạng thái'
                placeholderTextColor={'#574E92'}
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
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderBottomWidth: 3,
        borderBottomColor: '#E8ECF4',
        height: 50,
        width: '90%',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    button: {
        width: '90%',
        height: 40,
        backgroundColor: '#574E92',
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