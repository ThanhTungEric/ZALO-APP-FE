import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import axios from 'axios';  
import {login} from '../../router/APIRouter';

const Login = ({ navigation, route }) => {
    const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber || '');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        const data = {
            phoneNumber: phoneNumber,
            password: password
        };

        try {
            const response = await fetch(`${login}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const userData = await response.json();
                console.log(userData);
                navigation.navigate('Home');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/login.png')} resizeMode='contain' style={{width: 200, height: 100 }}/>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontWeight: '600', color: '#574E92', fontSize: 25 }}>ZooLaa</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TextInput placeholder='Nhập số điện thoại' placeholderTextColor={'#574E92'} 
                value={phoneNumber}
                style={{backgroundColor:'white', borderBottomWidth: 1, borderBottomColor: '#E8ECF4', height:50,width:'90%'}}
                onChangeText={(text) => setPhoneNumber(text)}
                ></TextInput>
                <TextInput placeholder='Nhập mật khẩu' placeholderTextColor={'#574E92'} 
                secureTextEntry={true}
                style={{backgroundColor:'white', borderBottomWidth: 1, borderBottomColor: '#E8ECF4', height:50,width:'90%',marginTop:10}} 
                onChangeText={(text) => setPassword(text)} 
                ></TextInput>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
                <TouchableOpacity 
                onPress={handleLogin}
                style={{ width: '40%', height: 45, backgroundColor: '#574E92', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Forgotpw')}
                style={{ width: '70%', height: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('AuthenOTP')}
                style={{ width: '90%', height: 40, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '600', color: 'white', fontSize: 18 }}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})