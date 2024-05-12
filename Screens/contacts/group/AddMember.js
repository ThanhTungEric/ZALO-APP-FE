import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../../../Components/PageContainer'
import { COLORS, FONTS } from '../../../constrants/theme'

//API router
import { getFriendListRoute, getAddMember } from '../../../router/APIRouter';

import AsyncStorage from '@react-native-async-storage/async-storage'

const AddMember = ({ navigation, route }) => {

    const [numberPhone, setPhoneNumber] = useState("");
    const [data1, setData1] = useState([]);

    const [userData, setUserData] = useState('');
    const { group, socket } = route.params; // Lấy thông tin group từ route params

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

    // // add member (thêm thành viên vào nhóm)
    // const addMemberToGroup = async (groupId, memberId) => {
    //     try {
    //         const response = await fetch(getAddMember, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 groupId: groupId,
    //                 memberId: memberId
    //             }),
    //         });
    //         if (!response.ok) {
    //             throw new Error("Network response was not ok");
    //         }
    //         const data = await response.json();
    //         console.log(data); // Data trả về từ backend sau khi thêm thành viên vào nhóm

    //     } catch (error) {
    //         console.error("Error adding member to group:", error);
    //     }
    // };

    // add member (thêm thành viên vào nhóm)
    const addMemberToGroup = async (groupId, memberId) => {
        try {
            const response = await fetch(getAddMember, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    groupId: groupId,
                    memberId: memberId
                }),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);

            if (data.message === "Member already in group") {
                Alert.alert("Thành viên đã có trong nhóm.");
            } else {
                navigation.navigate('ViewMember', { group: group, userData: userData });
            }

        } catch (error) {
            console.error("Error adding member to group:", error);
        }
    };

    const handleBackViewMember = (group) => {
        navigation.navigate('ViewMember', { group, userData, socket });
    };

    return (
        <SafeAreaView>
            <PageContainer>
                <View >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, paddingTop: 20 }}>
                        <View style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center', }}>
                            <Text onPress={() => handleBackViewMember(group)} style={{ ...FONTS.h4, marginVertical: 6, color: '#574E92' }}>X</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginHorizontal: 22, }}>
                            <Text style={{ ...FONTS.h4, marginVertical: 6 }}>Thêm vào nhóm</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 22, flexDirection: 'row', alignItems: 'center', backgroundColor: '#574E92', height: 48, paddingHorizontal: 12, borderRadius: 20, }}>
                        <Ionicons name="search-outline" size={24} color={COLORS.white} />
                        <TextInput style={{ width: '100%', height: '100%', marginHorizontal: 12, color: '#fff', }}
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={numberPhone}
                            placeholder="Tìm kiếm..."
                            placeholderTextColor={'#fff'}
                        />
                    </View>
                    <View>
                        <Text style={{ ...FONTS.h4, marginVertical: 10, marginLeft: 15 }}>Gợi ý</Text>
                    </View>
                    <View style={{ paddingBottom: 100, backgroundColor: '#fff', marginTop: 10 }}>
                        {data1.map((item, index) => (
                            <View key={index} >
                                {item.friendInfo && (
                                    <>
                                        <View
                                            key={index}
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
                                                style={{ width: 150, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30, marginLeft: 'auto' }}
                                                onPress={() => addMemberToGroup(group._id, item.friendInfo._id)}
                                            >
                                                <Text>Thêm vào nhóm</Text>
                                            </TouchableOpacity>
                                        </View>
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

export default AddMember;

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
