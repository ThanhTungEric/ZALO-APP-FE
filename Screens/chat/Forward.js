import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

import PageContainer from '../../components/PageContainer'
import { COLORS, FONTS } from '../../constrants/theme'

//API router
import { getFriendListRoute } from '../../router/APIRouter';

import AsyncStorage from '@react-native-async-storage/async-storage'

const Forward = ({ navigation }) => {

    const [numberPhone, setPhoneNumber] = useState("");
    const [data1, setData1] = useState([]);

    const [userData, setUserData] = useState('');

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

    return (
        <SafeAreaView>
            <PageContainer>
                <View >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 22, paddingTop: 20 }}>
                        <View style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', }}>
                            <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginHorizontal: 22, }}>
                            <Text style={{ ...FONTS.h4, marginVertical: 6 }}>Gửi đến</Text>
                        </View>
                        <View>
                            <Text style={{ ...FONTS.h4, marginVertical: 6 }}>Tạo nhóm</Text>
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
                        <Ionicons name="search-outline" size={24} color={COLORS.white}
                            onPress={handleSearch}
                        />
                        <TextInput style={{ width: '100%', height: '100%', marginHorizontal: 12, color: '#fff', }}
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={numberPhone}
                            placeholder="Tìm kiếm..."
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                    <View>
                        <Text  style={{ ...FONTS.h4, marginVertical: 6, marginLeft: 15 }}>Gửi tới</Text>
                    </View>
                    <View style={{ paddingBottom: 100, backgroundColor: '#fff', marginTop: 10 }}>
                        {data1.map((item, index) => (
                            <View key={index} >
                                {item.friendInfo && (
                                    <>
                                        <TouchableOpacity
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
                                            <View style={{ marginLeft: 'auto', width: 80, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                                                <Text>Gửi</Text>
                                            </View>

                                        </TouchableOpacity>
                                    </>
                                )}
                            </View>
                        ))}
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
