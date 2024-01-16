import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from "react";


const ChangePhone1 = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={{width:'100%', height:50,backgroundColor:"#18A0FB",flexDirection:'row',alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{fontWeight:'600',color:'white',left:20,fontSize:18}}>Đổi số điện thoại</Text>
            </View>
            <View style={{width:'90%',height:60,left:10}}>
                <Text style={{fontSize:20, fontWeight:'600'}}>Nhập số điện thoại mới</Text>
                <Text style={{fontSize:16, fontWeight:'400'}}>Bạn sẽ nhận được mã xác thực (OTP) từ cuộc gọi hoặc tin nhắn qua số điện thoại mới</Text>
            </View>
            <View style={{width:'100%',height:40, justifyContent:'center', alignItems:'center',flexDirection:'row',marginTop:30}}>
                <Text style={{width:'20%',left:20,fontWeight:500,fontSize:16}}>+84</Text>
                <TextInput placeholder="Nhập số điện thoại mới" placeholderTextColor={'#D9D9D9'}
                style={{width:'75%',height:40,borderBottomWidth:3, borderColor:'#18A0FB'}}
                ></TextInput>
            </View>
            
            <Pressable
            onPress={() => navigation.navigate('DoiSDT2')}
            style={{width:'90%',height:40,backgroundColor:'#18A0FB',borderRadius:20,marginTop:30}}>
                <Text style={{color:'white',textAlign:'center',marginTop:10}}>TIẾP TỤC</Text>
            </Pressable>

        </View>
    )
}
export default ChangePhone1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        
    },
});