import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllGroup, host } from '../../router/APIRouter'
import { COLORS, FONTS } from '../../constrants/theme'
import PageContainer from '../../Components/PageContainer';
import { useNavigation } from '@react-navigation/native';
import { io } from "socket.io-client";
const Group = () => {
    const navigator = useNavigation();
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

    const getAllGroups = async () => {
        try {
            const response = await fetch(getAllGroup, {
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
    }, []);
    //lấy data từ local 

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
