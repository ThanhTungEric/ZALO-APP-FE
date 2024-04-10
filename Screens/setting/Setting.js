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
