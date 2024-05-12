import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState,useEffect } from "react";
import { styles } from "../../../CSS/styles";

import AsyncStorage from '@react-native-async-storage/async-storage'

import { changePassword } from '../../../router/APIRouter';

const ChangePassword = ({ navigation }) => {
    const [lastPassword, setLastPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    const handleChangePassword = async () => {
        if (lastPassword === '' || newPassword === '' || confirmPassword === '') {
            Alert.alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        if (newPassword !== confirmPassword) {
            Alert.alert('Mật khẩu mới không khớp');
            return;
        }
        try {
            const response = await fetch(`${changePassword}/${user._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({lastpassword: lastPassword, newpassword: newPassword })
            });
            if (response.status === 200) {
                Alert.alert('Đổi mật khẩu thành công');
                navigation.navigate('Setting');
            } else {
                Alert.alert('Mật khẩu không đúng');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Đổi mật khẩu</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '80%' }}>
                    <Text style={{ left: '5%' }}>Mật khẩu hiện tại:</Text>
                </View>
                <Text>HIỆN</Text>
            </View>
            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput placeholder="Nhập mật khẩu hiện tại" placeholderTextColor={'#D9D9D9'}
                    style={{ width: '90%', height: 40 }}
                    value={lastPassword}
                    onChangeText={setLastPassword}
                ></TextInput>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20}}>
                <View  style={{ width: '80%' }}>
                    <Text style={{ left: '5%' }}>Mật khẩu mới:</Text>
                </View>
            </View>
            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput placeholder="Nhập mật khẩu mới" placeholderTextColor={'#D9D9D9'}
                    style={{ width: '90%', height: 40 }}
                    value={newPassword}
                    onChangeText={setNewPassword}
                ></TextInput>
            </View>
            <View style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput placeholder="Nhập lại mật khẩu mới" placeholderTextColor={'#D9D9D9'}
                    style={{ width: '90%', height: 40, borderBottomWidth: 1, borderColor: '#D9D9D9' }}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                ></TextInput>
            </View>
            <View style={{ width: '100%', height: 40, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ width: '30%', height: 40, backgroundColor: '#574E92', borderRadius: 20 }}
                    onPress={handleChangePassword}>
                    <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>CẬP NHẬT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default ChangePassword;
