import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from "react";


const ChangePassword = ({ navigation }) => {
    return (
        <View style={styles.container}> 
            <View style={{width:'100%', height:50,backgroundColor:"#574E92",flexDirection:'row',alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{color:'white',left:20,fontSize:18}}>Đổi mật khẩu</Text>
            </View>

            <View style={{width:'100%', height:50,backgroundColor:"#D9D9D9",flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontWeight:'400',fontSize:14, textAlign: 'center'}}>Mật khẩu phải bao gồm chữ số, không được chứa năm sinh, username và tên Zalo của bạn</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'80%'}}>
                    <Text style={{left:'5%'}}>Mật khẩu hiện tại:</Text>
                </View>
                <Text>HIỆN</Text>
            </View>
            <View style={{width:'100%',height:40, justifyContent:'center', alignItems:'center'}}>
                <TextInput placeholder="Nhập mật khẩu hiện tại" placeholderTextColor={'#D9D9D9'}
                style={{width:'90%',height:40}}
                ></TextInput>
            </View>

            <View style={{flexDirection:'row',marginTop:20}}>
                
                    <Text style={{left: 15}}>Mật khẩu mới:</Text>
                
                
            </View>
            <View style={{width:'100%',height:40, justifyContent:'center', alignItems:'center'}}>
                <TextInput placeholder="Nhập mật khẩu mới" placeholderTextColor={'#D9D9D9'}
                style={{width:'90%',height:40}}
                ></TextInput>
            </View>
            <View style={{width:'100%',height:40, justifyContent:'center', alignItems:'center'}}>
                <TextInput placeholder="Nhập lại mật khẩu mới" placeholderTextColor={'#D9D9D9'}
                style={{width:'90%',height:40, borderBottomWidth:1, borderColor:'#D9D9D9'}}
                ></TextInput>
            </View>
            <View style={{width:'100%', height:40, alignItems:'center', justifyContent:'center',marginTop:20}}>
                <View style={{width:'30%',height:40, backgroundColor:'#574E92',borderRadius:20}}>
                    <Text style={{color:'white',textAlign:'center',marginTop:10}}>CẬP NHẬT</Text>
                </View>
            </View>
        </View>
    );
};
export default ChangePassword;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    
  });