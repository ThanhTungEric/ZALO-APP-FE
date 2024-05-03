import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getUnFriendRoute } from '../../router/APIRouter';
import React, { useState, useEffect, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../Components/PageContainer';
import { COLORS, FONTS } from '../../constrants/theme'
const Call = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const selectedChat = route.params.selectedChat;

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

    const handleUnFriend = async ({ userId1, userId2 }) => {
        try {
            const response = await fetch(`${getUnFriendRoute}`, {
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
                throw new Error('Failed to unfriend.');
            }
            const data = await response.json();
        } catch (error) {
            console.error('Error unfriend:', error);
        }
    };



    return (
        <SafeAreaView>
            <PageContainer>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 22, height: 60, marginTop: 20 }}>
                        <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#83C5BE', marginBottom: 4, }}
                            onPress={() => navigation.goBack()}
                        >
                            <MaterialIcons name="keyboard-arrow-left" size={40} color={COLORS.white} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 8, color: "#fff", fontSize: 25 }}>COTOTA</Text>
                        <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#83C5BE', marginBottom: 4, }}>
                            <MaterialIcons name="videocam" size={35} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                    {/* Hình ảnh và tên */}
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: selectedChat.avatar }} style={styles.profileImage} />
                        <Text style={styles.profileName}>{selectedChat.fullName}</Text>
                        <Text style={{ color: "#fff", marginTop: 5 }}>Đang đổ chuông</Text>
                    </View>
                    {/* Footer */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 22, height: 60, marginTop: 400 }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#83C5BE', marginBottom: 4, }}>
                                <MaterialIcons name="volume-up" size={40} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{color: "#fff"}}>Loa</Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F54824', marginBottom: 4, }}>
                                <MaterialIcons name="call-end" size={40} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{color: "#fff"}}>Kết thúc</Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#83C5BE', marginBottom: 4, }}>
                                <MaterialIcons name="mic" size={35} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{color: "#fff"}}>Mic</Text>
                        </View>
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B71F9'
    },
    headerText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
        marginLeft: '5%',
    },
    profileContainer: {
        marginTop: 200,
        alignItems: 'center',
    },
    profileName: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff"
    },
    profileImage: {
        width: 200,
        height: 200,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    verticalOptionsContainer: {
        marginTop: 20,
    },
    option: {
        alignItems: 'center',
        padding: 10,
        borderColor: '#ccc',
    },
    option2: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    optionText: {
        marginLeft: 10,
        color: '#574E92',
    },
});

export default Call;