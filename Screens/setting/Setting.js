import React from "react";
import { Pressable, Text, View, ScrollView, TextInput } from "react-native";
import { AntDesign, Entypo, Feather, MaterialCommunityIcons, FontAwesome5, Ionicons, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';
import { styles } from "../../CSS/styles"
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Setting = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="search1" size={22} color="white" style={styles.searchIcon}/>
                <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
                    style={styles.searchInput}
                />
                <AntDesign name="setting" size={22} color="white" />
            </View>
            <ScrollView>
                <View style={{backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                        onPress={()=> navigation.navigate('AccountSecurity')}
                    >
                        <MaterialIcons name="security" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40 }}>Tài khoản và bảo mật</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 175}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                        onPress={()=> navigation.navigate('Privacy')}
                    >
                        <Entypo name="lock" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40 }}>Quyền riêng tư</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 215}}/>
                    </Pressable>
                </View>

                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 80, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Entypo name="time-slot" size={20} color="#574E92" style={{left: 20}}/>
                        <View style={{left: 40}}>
                            <Text>Dung lượng và dữ liệu</Text>
                            <Text style={{fontSize: 13, color:'grey'}}>Quản lý dữ liệu Zalo của bạn</Text>
                        </View>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 140}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 80, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <AntDesign name="cloudo" size={20} color="#574E92" style={{left: 20}} />
                        <View style={{left: 40}}>
                            <Text>Sao lưu và khôi phục</Text>
                            <Text style={{fontSize: 13, color:'grey'}}>Bảo vệ tin nhắn khi đổi máy hoặc cài lại Zalo</Text>
                        </View>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 45}}/>
                    </Pressable>
                </View>


                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                        onPress={()=> navigation.navigate('Notification')}
                    >
                        <FontAwesome5 name="bell" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40}}>Thông báo</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 245}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}
                        onPress={()=> navigation.navigate('Message')}
                    >
                        <AntDesign name="message1" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40}}>Tin nhắn</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 255}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}
                        onPress={()=> navigation.navigate('Calls')}
                    >
                        <Ionicons name="md-call-outline" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40}}>Cuộc gọi</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 255}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}
                        onPress={()=> navigation.navigate('Timeline')}
                    >
                        <MaterialCommunityIcons name="clock-time-seven-outline" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40}}>Nhật ký</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 260}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}
                        onPress={()=> navigation.navigate('Contact')}
                    >
                        <AntDesign name="contacts" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40}}>Danh bạ</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 255}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}
                        onPress={()=> navigation.navigate('Theme')}
                    >
                        <Octicons name="paintbrush" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40}}>Giao diện và ngôn ngữ</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 165}}/>
                    </Pressable>
                </View>

                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}} 
                        onPress={()=> navigation.navigate('About')}
                    >
                        <AntDesign name="infocirlceo" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40 }}>Thông tin về Zalo</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 195}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <AntDesign name="questioncircleo" size={20} color="#574E92" style={{left: 20}} />
                        <Text style={{left: 40 }}>Liên hệ hỗ trợ</Text>
                        <View style={{display: 'flex', width: 30, height: 30, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5, left:210}}>
                            <AntDesign name="message1" size={18} color="black" />
                        </View>
                    </Pressable>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                        onPress={()=> navigation.navigate('SwitchAccount')}
                    >
                        <Feather name="user-plus" size={20} color="#574E92" style={{left : 20}} />
                        <Text style={{left: 40 }}>Chuyển tài khoản</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 195}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', justifyContent:'center', height: 80, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}
                        onPress={ async ()=> {
                            await AsyncStorage.removeItem('userData');
                            navigation.navigate('Login');
                        }}
                    >
                        <View style={{flexDirection:'row',display: "flex", width: 350, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30}}>
                            <FontAwesome name="sign-out" size={24} color="black" />
                            <Text style={{fontWeight: 'bold', left: 10}}>Đăng xuất</Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
export default Setting;
