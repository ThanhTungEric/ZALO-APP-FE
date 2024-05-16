import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PageContainer from '../../Components/PageContainer'
import { COLORS, FONTS } from '../../constrants/theme'
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation('contact');

    return (
        <SafeAreaView>
            <PageContainer>
                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 22, marginTop: 22, }}>
                        <Text style={{ ...FONTS.h4 }}> {t('friend list')} </Text>
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
                            placeholder={t('enter number phone')}
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
                            <Text style={styles.textHeader}> {t('friend request')} </Text>
                        </Pressable>
                    </View>
                    <View style={{ backgroundColor: '#fff' }}>
                        <Pressable style={styles.header}
                            onPress={() => navigation.navigate('CreateGroup')}>
                            <View style={styles.viewHeader}>
                                <MaterialIcons name="group-add" size={24} color="white" />
                            </View>
                            <Text style={styles.textHeader}> {t('create group')} </Text>
                        </Pressable>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        height: 900,
                        flexDirection: 'row',
                    }}>
                        <Tab.Navigator initialRouteName={t('friend')}
                            screenOptions={{
                                tabBarLabelStyle: { textTransform: 'none' },
                                tabBarActiveTintColor: '#574E92',
                                tabBarInactiveTintColor: 'grey',
                            }}>
                            <Tab.Screen name={t('friend')} component={Friend} />
                            <Tab.Screen name={t('group')} component={Group} />
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
