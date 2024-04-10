import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput } from "react-native";
import { AntDesign, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../CSS/styles';
import { StatusBar } from 'expo-status-bar';

import AsyncStorage from '@react-native-async-storage/async-storage'

const Me = ({ navigation }) => {
  const [user, setUser] = useState('');
  
  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        const parsUser = JSON.parse(value);
        setUser(parsUser);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="search1" size={22} color="white" style={styles.searchIcon} />
        <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'} style={styles.searchInput} />
        <AntDesign name="user" size={22} color="white" />
      </View>
      <ScrollView>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', height: 70, backgroundColor: '#fff', }}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image source={require('../../assets/dog.png')} style={{ width: 45, height: 45, borderRadius: 22.5, right: 15 }} />
          <View style={{ right: 60 }}>
            <Text>{user.fullName}</Text>
            <Text style={{ fontSize: 10, color: 'grey' }}>Xem trang cá nhân</Text>
          </View>
          <Feather name="user-plus" size={20} color="#574E92" style={{ left: 15 }} />
        </Pressable>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', height: 70, backgroundColor: '#fff', marginTop: 10 }}>
          <Feather name="music" size={20} color="#574E92" style={{ left: 20 }} />
          <View style={{ left: 40 }}>
            <Text>Nhạc chờ Zalo</Text>
            <Text style={{ fontSize: 10, color: 'grey' }}>Đăng ký nhạc nhờ, thể hiện cá tính</Text>
          </View>
        </Pressable>
        <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10 }}>
          <Pressable style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}>
            <AntDesign name="qrcode" size={20} color="#574E92" style={{ left: 20 }} />
            <View>
              <Text style={{ left: 40 }}>Ví QR</Text>
              <Text style={{ fontSize: 10, left: 40 }}>Lưu trữ và xuất trình các mã QR quan trọng</Text>
            </View>
          </Pressable>
          <Pressable style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}>
            <AntDesign name="cloudo" size={20} color="#574E92" style={{ left: 20 }} />
            <Text style={{ left: 40 }}>Cloud của tôi</Text>
            <AntDesign name="right" size={18} color="#7A7E86" style={{ left: 225 }} />
          </Pressable>
        </View>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', height: 70, backgroundColor: '#fff', marginTop: 10 }}>
          <Entypo name="time-slot" size={20} color="#574E92" style={{ left: 20 }} />
          <View style={{ left: 40 }}>
            <Text>Dung lượng và dữ liệu</Text>
            <Text style={{ fontSize: 10, color: 'grey' }}>Quản lý dữ liệu Zalo của bạn</Text>
          </View>
          <AntDesign name="right" size={18} color="#7A7E86" style={{ left: 170 }} />
        </Pressable>
        <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10 }}>
          <Pressable style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}
            onPress={() => navigation.navigate('AccountSecurity')}>
            <MaterialIcons name="security" size={20} color="#574E92" style={{ left: 20 }} />
            <Text style={{ left: 40 }}>Tài khoản và bảo mật</Text>
            <AntDesign name="right" size={18} color="#7A7E86" style={{ left: 175 }} />
          </Pressable>
          <Pressable style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}
            onPress={() => navigation.navigate('Privacy')}>
            <Entypo name="lock" size={20} color="#574E92" style={{ left: 20 }} />
            <Text style={{ left: 40 }}>Quyền riêng tư</Text>
            <AntDesign name="right" size={18} color="#7A7E86" style={{ left: 215 }} />
          </Pressable>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

export default Me;
