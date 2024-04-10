<<<<<<< HEAD
import { View, Text, Image,TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 4 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>Bắt đầu nào!</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/cota.png')} style={{ width: 400, height: 400, borderRadius: 200 }} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenOTP')} style={{ paddingVertical: 12, backgroundColor: '#FFEA00', marginHorizontal: 28, borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Đăng ký</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                        <Text style={{color: 'white', fontWeight: '600'}}>Bạn đã có sẵn tài khoản?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{fontWeight: '600', color: '#FFEA00'}}> Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>

    );
}

=======
import { View, Text, Image,TouchableOpacity } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <View style={{ flex: 1, justifyContent: 'space-around', marginVertical: 4 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>Bắt đầu nào!</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/cota.png')} style={{ width: 400, height: 400, borderRadius: 200 }} />
                </View>
                <View style={{ marginVertical: 16 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenOTP')} style={{ paddingVertical: 12, backgroundColor: '#FFEA00', marginHorizontal: 28, borderRadius: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Đăng ký</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                        <Text style={{color: 'white', fontWeight: '600'}}>Bạn đã có sẵn tài khoản?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{fontWeight: '600', color: '#FFEA00'}}> Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <StatusBar style="auto" />
        </SafeAreaView>

    );
}

>>>>>>> b22fb74c6eb6513ba9b45c65c60c800e9b3e4ed1
export default Welcome;