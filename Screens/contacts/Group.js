import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable, Image, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllGroup, host, getAllGroupByMemberId, getLeaveGroup, getDeleteGroup, getGroupById } from '../../router/APIRouter'
import { COLORS, FONTS } from '../../constrants/theme'
import PageContainer from '../../Components/PageContainer';
import { useNavigation, useIsFocused  } from '@react-navigation/native';
import { io } from "socket.io-client";
const Group = () => {
    const navigator = useNavigation();
    const isFocused = useIsFocused();
    const socket = useRef();
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
    useEffect(() => {
        if (userData) {
            socket.current = io(host);
            socket.current.emit('add-user', userData._id);
        }
    }, [userData]);

    // //lấy toàn bộ danh sách nhóm chỉ để test 
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

    useEffect(() => {
        getUser();
        getAllGroups();
    }, [userData._id, isFocused]);
    //lấy data từ local 


    const isAdminGroup = (group) => {
        return group.groupAdmin === userData._id;
    }

    // leave group (rời nhóm)
    const handleLeaveGroup = async (groupId, memberId) => {
        try {
            Alert.alert(
                'Xác nhận rời nhóm',
                'Bạn có chắc chắn muốn rời nhóm này không?',
                [
                    {
                        text: 'Hủy',
                        onPress: () => console.log('Hủy rời nhóm'),
                        style: 'cancel'
                    },
                    {
                        text: 'Rời nhóm',
                        onPress: async () => {
                            try {
                                const response = await fetch(getLeaveGroup, {
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
                                console.log(data.message); // In ra thông báo từ backend
                                getAllGroups();
                            } catch (error) {
                                console.error("Error leaving group:", error);
                            }
                        }
                    }
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.error("Error handling leave group:", error);
        }
    };


    // delete-group (giải tán nhóm)
    const handleDeleteGroup = async (groupId, memberId) => {
        // Hiển thị thông báo xác nhận trước khi xóa nhóm
        Alert.alert(
            'Xác nhận giải tán nhóm',
            'Bạn có chắc chắn muốn giải tán nhóm này không?',
            [
                {
                    text: 'Hủy',
                    onPress: () => console.log('Hủy giải tán nhóm'),
                    style: 'cancel'
                },
                {
                    text: 'Giải tán',
                    onPress: async () => {
                        try {
                            const response = await fetch(getDeleteGroup, {
                                method: "DELETE",
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
                            console.log(data.message); // In ra thông báo từ backend
                            getAllGroups();
                        } catch (error) {
                            console.error("Error deleting group:", error);
                        }
                    }
                }
            ],
            { cancelable: false }
        );
    };


    return (
        <PageContainer>
            {/* render danh sách nhóm */}
            <View>
                {groups.map((group, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigator.navigate('ChatGroup', { group, socket })}
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
                            {isAdminGroup(group) && (
                                <>
                                    <TouchableOpacity onPress={() => handleDeleteGroup(group._id, userData._id)}>
                                        <View style={styles.viewHeader}>
                                            <Image source={require('../../assets/deleteGroup.png')} style={{ width: 20, height: 20 }} />
                                        </View>
                                    </TouchableOpacity>

                                </>
                            )}
                            {!isAdminGroup(group) && (
                                <TouchableOpacity onPress={() => handleLeaveGroup(group._id, userData._id)}>
                                    <View style={styles.viewHeader}>
                                        <Image source={require('../../assets/exit.png')} style={{ width: 20, height: 20 }} />
                                    </View>
                                </TouchableOpacity>
                            )}
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




