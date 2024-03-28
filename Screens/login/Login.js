import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import axios from 'axios';

const Login = ({ navigation, route }) => {
    const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber || '');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/user/login', {
                phoneNumber,
                password,
            });

            if (response.status === 200) {

                console.log('Đăng nhập thành công', response.data);

                // Chuyển hướng đến màn hình tiếp theo hoặc thực hiện các xử lý khác
            } else {

                console.error('Đăng nhập thất bại', response.data);
            }
        } catch (error) {

            console.error('Đã xảy ra lỗi:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 63, paddingTop: 25, backgroundColor: "#574E92", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: '600', color: 'white', fontSize: 18 }}>Đăng nhập</Text>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{}}>Bạn có thể đăng nhập bằng số điện thoại</Text>
            </View>
            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput placeholder='Số điện thoại' placeholderTextColor={'#574E92'}
                    value={phoneNumber}
                    style={{ backgroundColor: 'white', borderWidth: 3, borderRadius: 10, height: 50, width: '90%' }}
                    onChangeText={(text) => setPhoneNumber('0339955555')}
                ></TextInput>
                <TextInput placeholder='Mật khẩu' placeholderTextColor={'#574E92'}
                    style={{ backgroundColor: 'white', borderWidth: 3, borderRadius: 10, height: 50, width: '90%', marginTop: 10 }}
                    onChangeText={(text) => setPassword('Sangvo12345')}
                ></TextInput>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ width: '90%', height: 50, backgroundColor: '#574E92', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '600', color: 'white', fontSize: 18 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('OTP')}
                    style={{ width: '90%', height: 50, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>Đăng ký</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </View>
    )

}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },
})