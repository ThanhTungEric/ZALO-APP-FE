import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, Image, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PageContainer from '../../Components/PageContainer'
import { COLORS, FONTS } from '../../constrants/theme'

//API router
import { getFriendByNumberPhoneRoute } from '../../router/APIRouter';
import PopupFriend from './PopupFriend';

import AsyncStorage from '@react-native-async-storage/async-storage'

import Friend from './Friend';
import Group from './Group';
const Tab = createMaterialTopTabNavigator();

const Contacts = ({ navigation }) => {

    const [numberPhone, setPhoneNumber] = useState("");
    const [userData, setUserData] = useState('');

    //popup
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        setShowPopup(!showPopup)
    }
    //popup

    //lấy data từ local / lưu trữ thông tin người dùng đang đăng nhập
    const [user, setUser] = useState("");

    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('userData');
            if (value !== null) {
                const parsUser = JSON.parse(value);
                setUserData(parsUser);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
    }, []);
    //lấy data từ local 

    /////// gửi lời mời kết bạn
    const getFriendByNumberPhone = async () => {
        try {
            const response = await fetch(`${getFriendByNumberPhoneRoute}/${numberPhone}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const responseData = await response.json();

            if (responseData.phoneNumber === numberPhone) {
                setUser(responseData);
                setShowPopup(true);
            } else {
                Alert.alert('Người dùng chưa đăng ký tài khoản');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSearch = () => {
        getFriendByNumberPhone();
    };

    return (
        <SafeAreaView>
            <PageContainer>
                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 22, marginTop: 22, }}>
                        <Text style={{ ...FONTS.h4 }}>Danh sách bạn bè</Text>
                        <AntDesign name="plus" size={20} color={COLORS.secondaryBlack} />
                    </View>
                    <View style={{
                        marginHorizontal: 22,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#574E92',
                        height: 48,
                        marginVertical: 22,
                        paddingHorizontal: 12,
                        borderRadius: 20,
                    }}
                    >
                        <Ionicons name="search-outline" size={24} color={COLORS.white}
                            onPress={handleSearch}
                        />
                        <TextInput style={{ width: '100%', height: '100%', marginHorizontal: 12, color: '#fff', }}
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={numberPhone}
                            placeholder="Tìm kiếm số điện thoại..."
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                    <View>
                        {showPopup && (
                            <View>
                                <PopupFriend closePopup={closePopup} userData={userData} userId={user} />
                            </View>)}
                    </View>
                    <View style={{ backgroundColor: '#fff' }}>
                        <Pressable style={styles.header}
                            onPress={() => navigation.navigate('FriendRequest')}>
                            <View style={styles.viewHeader}>
                                <MaterialIcons name="group" size={24} color="white" />
                            </View>
                            <Text style={styles.textHeader}>Lời mời kết bạn</Text>
                        </Pressable>
                    </View>
                    <View style={{ backgroundColor: '#fff' }}>
                        <Pressable style={styles.header}
                            onPress={() => navigation.navigate('CreateGroup')}>
                            <View style={styles.viewHeader}>
                                <MaterialIcons name="group-add" size={24} color="white" />
                            </View>
                            <Text style={styles.textHeader}>Tạo nhóm mới</Text>
                        </Pressable>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        height: 900,
                        flexDirection: 'row',
                    }}>
                        <Tab.Navigator initialRouteName="Bạn bè"
                            screenOptions={{
                                tabBarLabelStyle: { textTransform: 'none' },
                                tabBarActiveTintColor: '#574E92',
                                tabBarInactiveTintColor: 'grey',
                            }}>
                            <Tab.Screen name="Bạn bè" component={Friend} />
                            <Tab.Screen name="Nhóm" component={Group} />
                        </Tab.Navigator>
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Contacts;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    viewHeader: {
        display: 'flex',
        width: 45,
        height: 45,
        backgroundColor: "#7E57C2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22.5,
        left: 10,
    },
    textHeader: {
        left: 25
    },
});
