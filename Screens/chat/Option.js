import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getUnFriendRoute } from '../../router/APIRouter';
import React, { useState, useEffect, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTranslation } from 'react-i18next';
import PageContainer from '../../Components/PageContainer';
import { COLORS, FONTS } from '../../constrants/theme'
const Options = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const selectedChat = route.params.selectedChat;
    const { t } = useTranslation('chat');

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

    const handleUnFriend = ({ userId1, userId2 }) => {
        Alert.alert(
            "Xác nhận",
            "Bạn có chắc chắn muốn xóa bạn này?",
            [
                {
                    text: "Hủy",
                    style: "cancel"
                },
                {
                    text: "Xóa",
                    onPress: async () => {
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
                            navigation.navigate('Tin nhắn');
                        } catch (error) {
                            console.error('Error unfriend:', error);
                        }
                    }
                }
            ],
            { cancelable: false }
        );
    };
    //////////////////////
    const handleNavigateToMessage = () => {
        // Điều hướng đến màn hình tin nhắn
        navigation.navigate('Messages');
    };

    const handleNavigateToProfile = () => {
        // Điều hướng đến màn hình trang cá nhân
        navigation.navigate('Me');
    };

    const handleNavigateToChangeBackground = () => {
        // Điều hướng đến màn hình thay đổi hình nền
        navigation.navigate('ChangeBackground');
    };

    const handleNavigateToCreateGroup = () => {
        // Điều hướng đến màn hình tạo nhóm
        navigation.navigate('CreateGroup');
    };

    const handleNavigateToAddToGroup = () => {
        // Điều hướng đến màn hình thêm vào nhóm
        navigation.navigate('AddMember');
    };

    const handleNavigateToViewGroup = () => {
        // Điều hướng đến màn hình xem nhóm chung
        navigation.navigate('ViewGroup');
    };

    return (
        <SafeAreaView>
            <PageContainer>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 22, backgroundColor: COLORS.white, height: 60, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
                            </TouchableOpacity>
                            <Text style={{ ...FONTS.h4, marginLeft: 8 }}>{t('option')}</Text>
                        </View>
                    </View>
                    {/* Hình ảnh và tên */}
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: selectedChat.avatar }} style={styles.profileImage} />

                        <Text style={styles.profileName}>{selectedChat.fullName}</Text>
                    </View>
                    {/* Các tùy chọn */}
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity onPress={handleNavigateToMessage} style={styles.option}>
                            <MaterialIcons name="message" size={24} color="#574E92" />
                            <Text style={styles.optionText}>{t('search message')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNavigateToProfile} style={styles.option}>
                            <MaterialIcons name="person" size={24} color="#574E92" />
                            <Text style={styles.optionText}>{t('personal page')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNavigateToChangeBackground} style={styles.option}>
                            <MaterialIcons name="image" size={24} color="#574E92" />
                            <Text style={styles.optionText}>{t('change background')}</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Tùy chọn hàng dọc */}

                    <View style={styles.verticalOptionsContainer}>

                        <TouchableOpacity onPress={handleNavigateToCreateGroup} style={styles.option2}>
                            <MaterialIcons name="group-add" size={24} color="#574E92" />
                            <Text style={styles.optionText}>{t('create group')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNavigateToAddToGroup} style={styles.option2}>
                            <MaterialIcons name="person-add" size={24} color="#574E92" />
                            <Text style={styles.optionText}>{t('add to group')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNavigateToViewGroup} style={styles.option2}>
                            <MaterialIcons name="group" size={24} color="#574E92" />
                            <Text style={styles.optionText}>{t('general group')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option2}
                            onPress={() => handleUnFriend({ userId1: user._id, userId2: selectedChat._id })}
                        >
                            <MaterialIcons name="delete" size={24} color="red" />
                            <Text style={{ marginLeft: 10, color: 'red', }}>{t('delete friend')}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </PageContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 18,
        marginLeft: '5%',
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 50,
        height: 50,
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

export default Options;