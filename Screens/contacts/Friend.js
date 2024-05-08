import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFriendListRoute } from '../../router/APIRouter';
import { COLORS, FONTS } from '../../constrants/theme'
import PageContainer from '../../Components/PageContainer';
import { useIsFocused } from '@react-navigation/native';
const Friend = () => {
    const isFocused = useIsFocused();
    const [data1, setData1] = useState([]);
    const [userData, setUserData] = useState('');
    //lấy data từ local / lưu trữ thông tin người dùng đang đăng nhập

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
    }, [userData._id, isFocused]);

    return (
        <PageContainer>
            {/* render danh sách bạn bè  */}
            <View style={{ paddingBottom: 100, backgroundColor: '#fff', marginTop: 10 }}>
                {data1.map((item, index) => (
                    <View key={index} >
                        {item.friendInfo && (
                            <>
                                <TouchableOpacity
                                    key={index}
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
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                ))}
            </View>
        </PageContainer>

    );
}

export default Friend;

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
