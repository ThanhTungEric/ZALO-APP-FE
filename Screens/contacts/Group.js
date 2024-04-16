import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllGroup } from '../../router/APIRouter'
import { getAllGroupByMemberId } from '../../router/APIRouter';
import { COLORS, FONTS } from '../../constrants/theme'
import PageContainer from '../../Components/PageContainer';
import { useNavigation } from '@react-navigation/native';
const Group = () => {
    const navigation = useNavigation();

    const [userData, setUserData] = useState('');

    // State để lưu danh sách nhóm
    const [groups, setGroups] = useState([]);

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

    // lấy toàn bộ danh sách nhóm chỉ để test
    // const getAllGroups = async () => {
    //     try {
    //         const response = await fetch(getAllGroup, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         if (!response.ok) {
    //             throw new Error("Network response was not ok");
    //         }
    //         const data = await response.json();
    //         setGroups(data); // Lưu danh sách nhóm vào state
    //         console.log("Danh sách nhóm:", data);
    //     } catch (error) {
    //         console.error("Error fetching group data:", error);
    //     }
    // };

    // lấy toàn bộ danh sách nhóm có chứa id của tài khoản đăng nhập
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
    // console.log("đây là",userData)

    useEffect(() => {
        getUser();
        getAllGroups();
    }, []);
    //lấy data từ local 

    const handleViewMember = (group) => {
        navigation.navigate('ViewMember', { group });
    };

    const isAdminGroup = (group) => {
        return group.groupAdmin === userData._id;
    }


    return (
        <PageContainer>
            {/* render danh sách nhóm */}
            <View>
                {groups.map((group, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleViewMember(group)}
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
                        <View style={{ marginLeft: 'auto', flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <View style={styles.viewHeader}>
                                    <Image source={require('../../assets/addMember.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>
                            {isAdminGroup(group) && (
                                <>
                                    <TouchableOpacity onPress={() => handleDeleteGroup(group._id)}>
                                        <View style={styles.viewHeader}>
                                            <Image source={require('../../assets/deleteGroup.png')} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </TouchableOpacity>
                                </>
                            )}
                            <TouchableOpacity>
                                <View style={styles.viewHeader}>
                                    <Image source={require('../../assets/exit.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </PageContainer>

    );
}

export default Group;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    viewHeader: {
        display: 'flex',
        width: 35,
        height: 35,
        backgroundColor: "#7E57C2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22.5,
        margin: 5,

    },
    textHeader: {
        left: 25
    },
});
