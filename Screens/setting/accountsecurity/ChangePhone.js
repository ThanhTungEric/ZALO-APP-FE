<<<<<<< HEAD:Screens/setting/ChangePhone.js
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from "react";


const ChangePhone = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{width:'100%', height:50,backgroundColor:"#574E92",flexDirection:'row',alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{color:'white',left:20,fontSize:18}}>Đổi số điện thoại</Text>
            </View>
            <View style={{width:'80%',height:60, marginTop: 10}}>
                <Text style={{fontSize:18, fontWeight:'500', textAlign: 'center'}}>Đổi số điện thoại mới cho tài khoản</Text>
            </View>

            <View style={{width:'80%',height:50,flexDirection:'row',marginTop:10}}>
                <AntDesign name="infocirlce" size={24} color="#18A0FB" />
                <Text style={{marginLeft:10,fontWeight:500}}>Số điện thoại mới sẽ gắn với thông tin, dữ liệu và nhật ký của tài khoản</Text>
            </View>

            <View style={{width:'80%',height:40,flexDirection:'row',marginTop:20}}>
                <AntDesign name="infocirlce" size={24} color="#18A0FB" />
                <Text style={{marginLeft:10,fontWeight:500}}>Bạn bè sẽ tìm thấy bạn bằng số điện thoại mới</Text>
            </View>

            <View style={{width:'80%',height:40,flexDirection:'row',marginTop:20}}>
                <AntDesign name="infocirlce" size={24} color="#FBBB18" />
                <Text style={{marginLeft:10,fontWeight:500}}>Lưu ý: Một số điện thoại chỉ được phép gắn với một tài khoản Zalo</Text>
            </View>

            <Pressable 
            onPress={() => navigation.navigate('ChangePhone1')}
            style={{
                width:'80%',
                height:20,
                flexDirection:'row',
                left:30,
                marginTop:20,
                alignItems:'center',
               
            }}>
                
                <Text style={{color:'#574E92',fontWeight:500,width:'67%',fontSize:18}}>Bắt đầu đổi số điện thoại</Text>
                <AntDesign name="right" size={16} color="#574E92" />
            </Pressable>
        </View>
    )
}
export default ChangePhone;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        
    },
=======
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import React, { useState } from "react";


const ChangePhone = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{width:'100%', height:50,backgroundColor:"#574E92",flexDirection:'row',alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{color:'white',left:20,fontSize:18}}>Đổi số điện thoại</Text>
            </View>
            <View style={{width:'80%',height:60, marginTop: 10}}>
                <Text style={{fontSize:18, fontWeight:'500', textAlign: 'center'}}>Đổi số điện thoại mới cho tài khoản</Text>
            </View>

            <View style={{width:'80%',height:50,flexDirection:'row',marginTop:10}}>
                <AntDesign name="infocirlce" size={24} color="#18A0FB" />
                <Text style={{marginLeft:10,fontWeight:500}}>Số điện thoại mới sẽ gắn với thông tin, dữ liệu và nhật ký của tài khoản</Text>
            </View>

            <View style={{width:'80%',height:40,flexDirection:'row',marginTop:20}}>
                <AntDesign name="infocirlce" size={24} color="#18A0FB" />
                <Text style={{marginLeft:10,fontWeight:500}}>Bạn bè sẽ tìm thấy bạn bằng số điện thoại mới</Text>
            </View>

            <View style={{width:'80%',height:40,flexDirection:'row',marginTop:20}}>
                <AntDesign name="infocirlce" size={24} color="#FBBB18" />
                <Text style={{marginLeft:10,fontWeight:500}}>Lưu ý: Một số điện thoại chỉ được phép gắn với một tài khoản Zalo</Text>
            </View>

            <Pressable 
            onPress={() => navigation.navigate('ChangePhone1')}
            style={{
                width:'80%',
                height:20,
                flexDirection:'row',
                left:30,
                marginTop:20,
                alignItems:'center',
               
            }}>
                
                <Text style={{color:'#574E92',fontWeight:500,width:'67%',fontSize:18}}>Bắt đầu đổi số điện thoại</Text>
                <AntDesign name="right" size={16} color="#574E92" />
            </Pressable>
        </View>
    )
}
export default ChangePhone;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        
    },
>>>>>>> b22fb74c6eb6513ba9b45c65c60c800e9b3e4ed1:Screens/setting/accountsecurity/ChangePhone.js
});