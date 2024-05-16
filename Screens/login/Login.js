import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import React, { useState } from "react";
import { login } from '../../router/APIRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation, I18nextProvider } from 'react-i18next'

import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation, route }) => {
    const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber || '');
    const [password, setPassword] = useState('');
    //i18n translate
    const { t } = useTranslation("login")
    const { i18n } = useTranslation()
    // const currentLanguage = locales[i18n.language]
    //hàm chuyển đổi ngôn ngữ
    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }
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
            phoneNumber: phoneNumber,
            password: password
        };

        if (phoneNumber === '' || password === '') {
            Alert.alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

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
            } else if (response.status === 405) {
                Alert.alert('Số điện thoại không tồn tại');
                return;
            } else if (response.status === 404) {
                Alert.alert('Mật khẩu không đúng');
                return;
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
        <I18nextProvider i18n={i18n}>
            <View style={{ flex: 1, backgroundColor: '#7B71F9' }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFEA00', padding: 8, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 16 }}>
                            <AntDesign name="arrowleft" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Image source={require('../../assets/cota.png')} style={{ width: 300, height: 300, borderRadius: 150 }} />
                    </View>
                </SafeAreaView>
                <View style={{ flex: 2, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ color: '#4B5563', marginLeft: 16 }}> {t('phone number')} </Text>
                        <TextInput
                            style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
                            value={phoneNumber}
                            placeholder={t('enter phone number')}
                            onChangeText={(text) => setPhoneNumber(text)}
                        />
                        <Text style={{ color: '#4B5563', marginLeft: 16 }}> {t('password')} </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                            <TextInput
                                style={{ flex: 1, padding: 16, color: '#4B5563' }}
                                secureTextEntry={hidePass}
                                placeholder={t('enter password')}
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                            <TouchableOpacity onPress={handleHidePass} style={{ padding: 16, color: '#4B5563' }}>
                                <Image source={hidePass ? require('../../assets/hide.png') : require('../../assets/eye.png')} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ alignItems: 'flex-end', marginBottom: 20, marginTop: 10 }}
                            onPress={() => navigation.navigate('Forgotpw')}
                        >
                            <Text style={{ color: '#4B5563' }}> {t('forgot password')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#FFEA00', borderRadius: 20 }} onPress={handleLogin}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}> {t('login')} </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, color: '#4B5563', fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}> {t('or')} </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                        <Text style={{ color: '#4B5563', fontWeight: '600' }}> {t('do not have account')}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('AuthenOTP')}>
                            <Text style={{ fontWeight: '600', color: 'purple' }}> {t('register')} </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <StatusBar style="auto" />
            </View>
        </I18nextProvider>


    );

}
export default Login;