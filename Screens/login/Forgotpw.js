import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image,  } from 'react-native';
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Forgotpw = ({ navigation}) => {


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
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Email</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20 }}
                        placeholder='Nhập email'
                    />
                   <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#FFEA00', borderRadius: 20, marginTop: 50 }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )

}
export default Forgotpw;