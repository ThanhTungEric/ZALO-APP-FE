import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Pressable } from 'react-native';
import React, { useState } from "react"; 
import {AntDesign} from '@expo/vector-icons';
const Forgotpw = ({ navigation, route }) => {
    
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: "#fff", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                </Pressable>
            </View>
            <View>
                <Image source={require('../../assets/login.png')} resizeMode='contain' style={{ width: 300, height: 200,  }}/>
            </View>
            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <TextInput placeholder='Email' placeholderTextColor={'#574E92'} 
                style={{backgroundColor:'white', borderBottomWidth: 1, borderBottomColor: '#E8ECF4', height:50,width:'90%'}}
                ></TextInput>
            </View>
            <View style={{ width: '100%', height: 50, justifyContent: 'center', alignItems: 'center',marginTop:20 }}>
                <TouchableOpacity 
                style={{ width: '70%', height: 40, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Text style={{ fontWeight: '600', color: 'black', fontSize: 18 }}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default Forgotpw;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})