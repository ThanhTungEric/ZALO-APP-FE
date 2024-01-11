import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, FontAwesome5, Ionicons, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';

const Setting = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#0091FF', height: 40}}>
                <Pressable onPress={()=> navigation.navigate('Cá nhân')}>
                    <AntDesign name="left" size={22} color="white" style={{right: 35}} />
                </Pressable>
                <Text style={{fontSize: 18, color: 'white', right: 110}}>Cài đặt</Text>
                <AntDesign name="search1" size={22} color="white" style={{left: 35}} />
            </View>

            <ScrollView>
                <View style={{ height: 140, backgroundColor: '#fff'}}>
                    <Pressable 
                    onPress={()=> navigation.navigate('TaiKhoanBaoMat')}
                    style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <MaterialIcons name="security" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40 }}>Tài khoản và bảo mật</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 205}}/>
                    </Pressable>
                    <Pressable
                    onPress={()=> navigation.navigate('QuyenRiengTu')}
                    style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Entypo name="lock" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40 }}>Quyền riêng tư</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 245}}/>
                    </Pressable>
                </View>

                <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Entypo name="time-slot" size={20} color="#0091FF" style={{left: 20}}/>
                        <View style={{left: 40}}>
                            <Text>Dung lượng và dữ liệu</Text>
                            <Text style={{fontSize: 13, color:'grey'}}>Quản lý dữ liệu Zalo của bạn</Text>
                        </View>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 175}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <AntDesign name="cloudo" size={20} color="#0091FF" style={{left: 20}} />
                        <View style={{left: 40}}>
                            <Text>Sao lưu và khôi phục</Text>
                            <Text style={{fontSize: 13, color:'grey'}}>Bảo vệ tin nhắn khi đổi máy hoặc cài lại Zalo</Text>
                        </View>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 85}}/>
                    </Pressable>
                </View>


                <View style={{ height: 420, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <FontAwesome5 name="bell" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40}}>Thông báo</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 275}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <AntDesign name="message1" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40}}>Tin nhắn</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 285}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Ionicons name="md-call-outline" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40}}>Cuộc gọi</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 285}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <MaterialCommunityIcons name="clock-time-seven-outline" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40}}>Nhật ký</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 290}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <AntDesign name="contacts" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40}}>Danh bạ</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 285}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Octicons name="paintbrush" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40}}>Giao diện và ngôn ngữ</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 195}}/>
                    </Pressable>
                </View>

                <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}} 
                        onPress={()=> navigation.navigate('About')}
                    >
                        <AntDesign name="infocirlceo" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40 }}>Thông tin về Zalo</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 230}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <AntDesign name="questioncircleo" size={20} color="#0091FF" style={{left: 20}} />
                        <Text style={{left: 40 }}>Liên hệ hỗ trợ</Text>
                        <View style={{display: 'flex', width: 30, height: 30, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: '50%', left:240}}>
                            <AntDesign name="message1" size={18} color="black" />
                        </View>
                    </Pressable>
                </View>
                <View style={{ height: 140, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                        onPress={()=> navigation.navigate('SwitchAccount')}
                    >
                        <Feather name="user-plus" size={20} color="#0091FF" style={{left : 20}} />
                        <Text style={{left: 40 }}>Chuyển tài khoản</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 225}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', justifyContent:'center', height: 80, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <View style={{flexDirection:'row',display: "flex", width: 350, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30}}>
                            <FontAwesome name="sign-out" size={24} color="black" />
                            <Text style={{fontWeight: 'bold', left: 10}}>Đăng xuất</Text>
                        </View>
                    </Pressable>
                </View>
                

                

            </ScrollView>
        </View>
    );
}
export default Setting;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        height: 670,
    },
});