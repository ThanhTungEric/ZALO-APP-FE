import { Pressable, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { styles } from "../../../CSS/styles"

const AccountSecurity = ({ navigation }) => {
  const [Toggle, setToggle] = useState(false);
  const toggleButton = (toggleFunction) => {
    toggleFunction((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
        <Text style={styles.title}>Tài khoản và bảo mật</Text>
      </View>
      <View style={{ width: '100%', height: 210, backgroundColor: "#fff" }}>
        <View style={{ height: 30 }}>
          <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Tài khoản</Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('ChangePhone')}
          style={{
            height: 60,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text>Đổi số điện thoại</Text>
            </View>
            <View style={{ height: 20 }}>
              <Text style={{ fontSize: 13, color: 'grey' }}>+84 XXX XXX XXX</Text>
            </View>
          </View>
          <View style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('ChangePassword')}
          style={{
            height: 40,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text>Đổi mật khẩu</Text>
            </View>
          </View>
          <View
            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
        </Pressable>

        <View
          style={{
            height: 40,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text>Xác thực tài khoản</Text>
            </View>
          </View>
          <Pressable style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></Pressable>
        </View>

        <View
          style={{
            height: 40,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text>Xóa tài khoản</Text>
            </View>
          </View>
          <Pressable style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></Pressable>
        </View>

      </View>


      <View style={{ width: '100%', height: 290, backgroundColor: "#fff", marginTop: 10 }}>
        <View style={{ height: 30 }}>
          <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Bảo mật</Text>
        </View>

        <View
          style={{
            height: 90,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text>Kiểm tra bảo mật</Text>
            </View>
            <View style={{ height: 20 }}>
              <Text style={{ fontSize: 13, color: 'grey' }}>Theo dõi tình trạng bảo mật và xử lý các vấn đề liên</Text>
              <Text style={{ fontSize: 13, color: 'grey' }}>quan đến tài khoản</Text>
            </View>
          </View>
          <Pressable style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></Pressable>
        </View>

        <View
          style={{
            height: 90,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text >Quản lý thiết bị đăng nhập</Text>
            </View>
            <View style={{ height: 20 }}>
              <Text style={{ fontSize: 13, color: 'grey' }}>Quản lý các thiết bị bạn sử dụng để đăng nhập Zalo</Text>
            </View>
          </View>
          <Pressable style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></Pressable>
        </View>

        <View
          style={{
            height: 40,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ width: '90%' }}>
            <View style={{ height: 20 }}>
              <Text>Khóa Zalo</Text>
            </View>
          </View>
          <Pressable style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></Pressable>
        </View>

        <View
          style={{
            height: 40,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#D9D9D9',
            left: 20,
            flexDirection: 'row',
            alignItems: 'center',
            //justifyContent:'center'
          }}>
          <View style={{ width: '80%' }}>
            <View style={{ height: 20 }}>
              <Text>Bảo mật 2 lớp</Text>
            </View>
          </View>
          <View style={{ width: '10%' }}>
            <TouchableOpacity
              style={[styles.toggleBtn, Toggle ? styles.activeBtn : null]}
              onPress={() => toggleButton(setToggle)}
            >
              <View style={[styles.circle, Toggle ? styles.activeCircle : null]} />
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>
  );
}

export default AccountSecurity;
