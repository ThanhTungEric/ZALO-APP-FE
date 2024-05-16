import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../../Components/PageContainer'
import { COLORS, FONTS } from '../../constrants/theme'
import axios from 'axios'
import { getAllGroupByMemberId, sendMessageGroup } from '../../router/APIRouter'
const { useTranslation } = require('react-i18next');

//API router
import { getFriendListRoute, sendMessageRoute } from '../../router/APIRouter';

import AsyncStorage from '@react-native-async-storage/async-storage'

const Forward = ({ navigation, route }) => {

    const { message , socket } = route.params;
    const { t } = useTranslation('chat');

    const [numberPhone, setPhoneNumber] = useState("");
    const [data1, setData1] = useState([]);
    const [groups, setGroups] = useState([]);

    const [userData, setUserData] = useState('');
    console.log("message đã gửi qua", message);
    console.log("socket đã gửi qua", socket);

    const handleSendMsg = async (message, userSelected) => {
        try {
            const response = await axios.post(sendMessageRoute, {
                from: userData._id,
                to: userSelected._id,
                message: message.message,
            });
            if (response.status === 200) {
                console.log("Gửi tin nhắn thành công", response.data);
                navigation.navigate('ChatBox', { selectedChat: userSelected, socket: socket});
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    const handleSendMsgGr = async (message, GroupSelected) => {
        try {
            const response = await axios.post(`${sendMessageGroup}/${GroupSelected._id}`, {
                from: userData._id,
                to: GroupSelected._id,
                message: message.message,
            });
            console.log("GroupSelected", GroupSelected);
            if (response.status === 200) {
                console.log("Gửi tin nhắn thành công", response.data);
                
                navigation.navigate('ChatGroup', { group: GroupSelected , socket: socket });
                
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    const sendChat = (userSelected) => {
        handleSendMsg(message, userSelected)
    }

    const sendChatGr = (GroupSelected) => {
        handleSendMsgGr(message, GroupSelected)
    }

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

    const handleSearch = () => {
        getFriendByNumberPhone();
    };

    /////////////// lấy danh sách bạn bè
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${getFriendListRoute}/${userData._id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setData1(data);
                console.log("Danh sách bạn bè", data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userData._id]);


    const getAllGroups = async () => {
        try {
            const response = await fetch(`${getAllGroupByMemberId}/${userData._id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setGroups(data); // Lưu danh sách nhóm vào state
            console.log("Danh sách nhóm:", data);
        } catch (error) {
            console.error("Error fetching group data:", error);
        }
    };

    useEffect(() => {
        getUser();
        getAllGroups();
    }, [userData._id]);

    return (
        <SafeAreaView>
            <PageContainer>
                <View >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 22, paddingTop: 20 }}>
                        <View style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', }}>
                            <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginHorizontal: 22, }}>
                            <Text style={{ ...FONTS.h4, marginVertical: 6 }}> {t('send to')} </Text>
                        </View>
                        <View>
                            <Text style={{ ...FONTS.h4, marginVertical: 6 }} onPress={() => navigation.navigate('CreateGroup')}> {t('create group')} </Text>
                        </View>
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
                        <Ionicons name="search-outline" size={24} color={COLORS.white} />
                        <TextInput style={{ width: '100%', height: '100%', marginHorizontal: 12, color: '#fff', }}
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={numberPhone}
                            placeholder={t('search')}
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.h4, marginVertical: 6, marginLeft: 15 }}> {t('send to')} </Text>
                    </View>
                    <View style={{ paddingBottom: 100, backgroundColor: '#fff', marginTop: 10 }}>
                        {data1.map((item, index) => (
                            <View key={index} >
                                {item.friendInfo && (
                                    <>
                                        <View
                                            key={index}
                                            // onPress={() =>
                                            //     navigation.navigate('Chat')
                                            // }
                                            style={[
                                                {
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    paddingHorizontal: 22,
                                                    borderBottomColor: COLORS.secondaryWhite,
                                                    borderBottomWidth: 1,
                                                },
                                                index % 2 !== 0
                                                    ? {
                                                        backgroundColor: COLORS.tertiaryWhite,
                                                    }
                                                    : null,
                                            ]}
                                        >
                                            <View style={{ paddingVertical: 15, marginRight: 22, }}>
                                                <Image
                                                    source={{ uri: item.friendInfo.avatar }}
                                                    resizeMode="contain"
                                                    style={{ height: 50, width: 50, borderRadius: 25, }}
                                                />
                                            </View>
                                            <View style={{ flexDirection: 'column', }}>
                                                <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                                                    {item.friendInfo.fullName}
                                                </Text>
                                            </View>
                                            <TouchableOpacity
                                                style={{ width: 80, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}
                                                onPress={() => sendChat(item.friendInfo)}
                                            >
                                                <Text>{t('send')}</Text>
                                            </TouchableOpacity>


                                        </View>
                                    </>
                                )}
                            </View>
                        ))}
                        {/* render danh sách nhóm */}
                        <View>
                            {groups.map((group, index) => (
                                <View
                                    key={index}
                                    //onPress={() => navigator.navigate('ChatGroup', { group, socket })}
                                    style={[
                                        { width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, borderBottomColor: COLORS.secondaryWhite, borderBottomWidth: 1, },
                                        index % 2 !== 0
                                            ? {
                                                backgroundColor: COLORS.tertiaryWhite,
                                            }
                                            : null,
                                    ]}
                                >
                                    <View style={{ paddingVertical: 15, marginRight: 22, }}>
                                        <Image
                                            source={{ uri: group.avatar }}
                                            resizeMode="contain"
                                            style={{ height: 50, width: 50, borderRadius: 25, }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'column', }}>
                                        <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                                            {group.groupName}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        style={{ width: 80, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}
                                        onPress={() => sendChatGr(group)}
                                    >
                                        <Text>Gửi</Text>
                                    </TouchableOpacity>

                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Forward;

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
