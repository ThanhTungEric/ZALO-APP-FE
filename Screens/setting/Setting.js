<<<<<<< HEAD
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
=======
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../components/PageContainer';
import { COLORS, FONTS } from '../../constrants/theme'
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Ionicons, Entypo, FontAwesome, Feather,Octicons } from '@expo/vector-icons'

import AsyncStorage from '@react-native-async-storage/async-storage'

const Setting = ({ navigation }) => {

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
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 22, paddingTop: 20 }}>
                    <View style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: COLORS.secondaryWhite, alignItems: 'center', justifyContent: 'center', }}>
                        <AntDesign name="user" size={24} color={COLORS.black} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginHorizontal: 22, }}>
                        <Image source={{ uri: user.avatar }} style={{ width: 45, height: 45, borderRadius: 22.5, right: 15 }} />
                        <Text style={{ ...FONTS.h4, marginVertical: 6 }}>{user.fullName}</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.gray }}> {user.phoneNumber}</Text>
                    </View>
                    <TouchableOpacity >
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 32, }}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('Me')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <AntDesign name="user" size={24} color={COLORS.black} />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Thông tin cá nhân
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('Message')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Ionicons name="chatbubble-outline" size={24} color={COLORS.black}/>
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Tin nhắn
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('AccountSecurity')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialCommunityIcons name="shield-lock-open-outline" size={24} color={COLORS.black}/>
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Tài khoản và bảo mật
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('Privacy')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Entypo  name="light-down" size={24} color={COLORS.black}/>
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Quyền riêng tư
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('Notification')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Ionicons name="notifications-outline" size={24} color={COLORS.black}/>
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Thông báo
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('Theme')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Octicons name="paintbrush" size={24} color={COLORS.black}/>
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Giao diện & ngôn ngữ
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('About')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Ionicons name="help-circle-outline" size={24} color={COLORS.black}/>
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Thông tin về CoToTa
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 22, paddingVertical: 12, }}
                        onPress={() => navigation.navigate('SwitchAccount')}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Feather name="user-plus" size={24} color={COLORS.black} />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Chuyển tài khoản
                            </Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color={COLORS.black}/>
                    </TouchableOpacity>
                    <Pressable style={{ alignItems: 'center', justifyContent: 'center', height: 80, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}
                        onPress={async () => {
                            await AsyncStorage.removeItem('userData');
                            navigation.navigate('Login');
                        }}
                    >
                        <View style={{ flexDirection: 'row', display: "flex", width: 350, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                            <FontAwesome name="sign-out" size={24} color="black" />
                            <Text style={{ fontWeight: 'bold', left: 10 }}>Đăng xuất</Text>
                        </View>
                    </Pressable>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Setting
>>>>>>> b22fb74c6eb6513ba9b45c65c60c800e9b3e4ed1
