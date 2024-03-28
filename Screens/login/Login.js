import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
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
                navigation.navigate('Home');
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
            <View>
                <Image source={require('../../assets/login.png')} resizeMode='contain' style={{ width: 300, height: 200,  }}/>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontWeight: '600', color: '#574E92', fontSize: 25 }}>ZooLaa</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TextInput placeholder='Phone Number' placeholderTextColor={'#574E92'} 
                value={phoneNumber}
                style={{backgroundColor:'white', borderBottomWidth: 1, borderBottomColor: '#E8ECF4', height:50,width:'90%'}}
                onChangeText={(text) => setPhoneNumber(text)}
                ></TextInput>
                <TextInput placeholder='Password' placeholderTextColor={'#574E92'} 
                secureTextEntry={true}
                style={{backgroundColor:'white', borderBottomWidth: 1, borderBottomColor: '#E8ECF4', height:50,width:'90%',marginTop:10}} 
                onChangeText={(text) => setPassword(text)} 
                ></TextInput>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
                <TouchableOpacity 
                //onPress={handleLogin}
                onPress={()=> navigation.navigate('Home')}
                style={{ width: '70%', height: 40, backgroundColor: '#574E92', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '600', color: 'white', fontSize: 18 }}>Đăng nhập</Text>
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
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})