import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getGetAddFriendRoute } from '../../../router/APIRouter';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getRejectFriend } from '../../../router/APIRouter';
import { FONTS } from '../../../constrants/theme';
const Sent = () => {

    const [data, setData] = useState([]);
    const [user, setUser] = useState("");


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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${getGetAddFriendRoute}/${user._id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const filteredData = data.filter(item => item.friend.actionUserId == user._id);
                setData(filteredData);
                console.log("Danh sách đã gửi lời mời kết bạn", data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user._id]);

    const handleRejectFriend = async ({ userId1, userId2 }) => {
        try {
            const response = await fetch(`${getRejectFriend}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idUser1: userId1,
                    idUser2: userId2,
                }),

            });

            if (!response.ok) {
                throw new Error('Failed to reject friend.');
            }
            const updatedData = data.filter(item => item.friend.idUser2 !== userId2);
            setData(updatedData);
            //const data = await response.json();
        } catch (error) {
            console.error('Error rejecting friend:', error);
        }
        setIsRefuseModalOpen(false);
        window.location.reload(); 
    };

    

    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item, index) => (
                    <View key={index} style={styles.friendContainer}>
                        {item.friendInfo && (
                            <>
                                <View style={styles.infoContainer}>
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
                                        <Text style={{ fontSize: 13, color: 'grey', marginTop: 5 }}>Có thể bạn quen</Text>
                                    </View>
                                    <View  style={{ marginLeft: 'auto', width: 80, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                                        <TouchableOpacity
                                            onPress={() => handleRejectFriend({ userId1: item.friend.idUser1, userId2: item.friend.idUser2 })}
                                            style={styles.button}
                                        >
                                            <Text>Thu hồi</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}
                    </View>
                ))}
            </ScrollView>
            <StatusBar style="auto" />
        </View >
    );
}

export default Sent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
    },
    friendContainer: {
        height: 260,
        backgroundColor: '#fff',
        marginVertical: 10
    },
    avatar: {
        borderRadius: 22.5,
        width: 50,
        height: 50,
    },
    infoContainer: {
        marginLeft: 10,
    },
    button: {
        width: 130,
        height: 35,
        backgroundColor: "#EAECF0",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    }
});
