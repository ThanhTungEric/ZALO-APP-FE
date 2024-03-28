import React from "react";
import { Pressable, StyleSheet, Text, View, Image, ScrollView, TextInput } from "react-native";
import { AntDesign, Feather,Entypo, MaterialIcons } from '@expo/vector-icons';

const Me = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 40}}>
              <AntDesign name="search1" size={22} color="white"/>
              <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
                style={{width: 260, height:40, color: "white"}}
              />
              <Pressable onPress={()=> navigation.navigate('Setting')}>
                <AntDesign name="setting" size={22} color="white" />
              </Pressable>
            </View>

            <ScrollView>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', height: 70, backgroundColor: '#fff',}}>
                  <Image source={require('../assets/dog.png')} style={{ width: 45, height: 45, borderRadius: '50%', right: 20 }}/>
                  <View style={{ right: 70}}>
                    <Text>Lê Quang Trung</Text>
                    <Text style={{fontSize: 10, color:'grey'}}>Xem trang cá nhân</Text>
                  </View>
                  <Feather name="user-plus" size={20} color="#574E92" style={{left : 15}} />
                </Pressable>

                <Pressable style={{ flexDirection: 'row', alignItems: 'center', height: 70, backgroundColor: '#fff', marginTop: 10}}>
                  <Feather name="music" size={20} color="#574E92" style={{left: 20}} />
                  <View style={{left: 40}}>
                    <Text>Nhạc chờ Zalo</Text>
                    <Text style={{fontSize: 10, color:'grey'}}>Đăng ký nhạc nhờ, thể hiện cá tính</Text>
                  </View>
                </Pressable>
                
                <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10 }}>
                  <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                    <AntDesign name="qrcode" size={20} color="#574E92" style={{left: 20}} />
                    <View>
                      <Text style={{left: 40 }}>Ví QR</Text>
                      <Text style={{fontSize: 10, left: 40}}>Lưu trữ và xuất trình các mã QR quan trọng</Text>
                    </View>
                  </Pressable>
                  <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                    <AntDesign name="cloudo" size={20} color="#574E92" style={{left: 20}} />
                    <Text style={{left: 40 }}>Cloud của tôi</Text>
                    <AntDesign name="right" size={18} color="#7A7E86" style={{left: 255}}/>
                  </Pressable>
                </View>

                <Pressable style={{ flexDirection: 'row', alignItems: 'center', height: 70, backgroundColor: '#fff', marginTop: 10}}>
                  <Entypo name="time-slot" size={20} color="#574E92" style={{left: 20}}/>
                  <View style={{left: 40}}>
                    <Text>Dung lượng và dữ liệu</Text>
                    <Text style={{fontSize: 10, color:'grey'}}>Quản lý dữ liệu Zalo của bạn</Text>
                  </View>
                  <AntDesign name="right" size={18} color="#7A7E86" style={{left: 200}} />
                </Pressable>

                <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10 }}>
                  <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                    onPress={()=> navigation.navigate('AccountSecurity')}
                  >
                    <MaterialIcons name="security" size={20} color="#574E92" style={{left: 20}} />
                    <Text style={{left: 40 }}>Tài khoản và bảo mật</Text>
                    <AntDesign name="right" size={18} color="#7A7E86" style={{left: 205}}/>
                  </Pressable>
                  <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                    onPress={()=> navigation.navigate('Privacy')}
                  >
                    <Entypo name="lock" size={20} color="#574E92" style={{left: 20}} />
                    <Text style={{left: 40 }}>Quyền riêng tư</Text>
                    <AntDesign name="right" size={18} color="#7A7E86" style={{left: 245}}/>
                  </Pressable>
                </View>

            </ScrollView>
        </View>
    );
}
export default Me;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        height: 670,
    },
});