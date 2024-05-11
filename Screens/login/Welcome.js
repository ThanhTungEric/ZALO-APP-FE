import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const Welcome = ({ navigation }) => {
    const { t } = useTranslation("login")
    const { i18n } = useTranslation()
    // const currentLanguage = locales[i18n.language]
    //hàm chuyển đổi ngôn ngữ
    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 4 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}> {t('let start')} </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/cota.png')} style={{ width: 400, height: 400, borderRadius: 200 }} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ paddingVertical: 12, backgroundColor: '#FFEA00', marginHorizontal: 28, borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}> {t('register')} </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={{ color: 'white', fontWeight: '600' }}> {t('are u have account')} </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontWeight: '600', color: '#FFEA00' }}> {t('login')} </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* change language */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => changeLanguage('en')}>
                        <Text style={{ color: '#4B5563' }}>English</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#4B5563' }}> | </Text>
                    <TouchableOpacity onPress={() => changeLanguage('vi')}>
                        <Text style={{ color: '#4B5563' }}>Tiếng Việt</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>

    );
}

export default Welcome;