import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import React, { useState } from "react";
import { login } from '../../router/APIRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation, route }) => {
    const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber || '');
    const [password, setPassword] = useState('');

    //hide icon pass
    const [hideIconPass, setHideIconPass] = useState(true);
    //hide pass
    const [hidePass, setHidePass] = useState(true);
    //form login/register
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const handleHidePass = () => {
        setHidePass(!hidePass);
        setPassword(password);
        setHideIconPass(!hideIconPass);
    }

    const handleLogin = async (e) => {
        const data = {
            phoneNumber: '0812718943',
            password: 'thanhtung123@'
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
                await AsyncStorage.setItem('userData', JSON.stringify(userData));
                navigation.navigate('Home');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    // const [data, setData] = useState([]);
    // //http://localhost:8080/user
    // useEffect(() => {
    //     axios.get('https://localhost:8083/user')
    //         .then(res => {
    //             setData(res.data);
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         })
    // }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFEA00', padding: 8, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 16 }}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/cota.png')} style={{ width: 200, height: 200, borderRadius: 100 }} />
                </View>
            </SafeAreaView>
            <View style={{ flex: 2, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Số điện thoại</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
                        value={phoneNumber}
                        placeholder='Nhập số điện thoại'
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Mật Khẩu</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                        <TextInput
                            style={{ flex: 1, padding: 16, color: '#4B5563' }}
                            secureTextEntry={hidePass}
                            placeholder='Nhập mật khẩu'
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
                        <TouchableOpacity onPress={handleHidePass} style={{ padding: 16, color: '#4B5563' }}>
                            <Image source={hidePass ? require('../../assets/hide.png') : require('../../assets/eye.png')} style={{ width: 20, height: 20, backgroundColor: 'grey' }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20, marginTop: 10 }}
                        onPress={() => navigation.navigate('Forgotpw')}
                    >
                        <Text style={{ color: '#4B5563' }}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#FFEA00', borderRadius: 20 }} onPress={handleLogin}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, color: '#4B5563', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Hoặc</Text>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 12 }}>
                    <TouchableOpacity style={{ padding: 8, backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                        <Image source={require('../../assets/google.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                        <Image source={require('../../assets/apple.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                        <Image source={require('../../assets/facebook.png')} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                    <Text style={{ color: '#4B5563', fontWeight: '600' }}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenOTP')}>
                        <Text style={{ fontWeight: '600', color: '#FFEA00' }}> Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>

    );

}
export default Login;
