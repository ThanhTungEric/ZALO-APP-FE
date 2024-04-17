import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, FONTS } from '../../constrants/theme'
import { getUnFriendRoute } from '../../router/APIRouter';
import React, { useState, useEffect, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../Components/PageContainer';

const OptionsGroup = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { group, userData } = route.params; // Lấy thông tin group và userData từ route params
    const groupId = group._id;

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


    // const handleNavigateToChangeBackground = () => {
    //     // Điều hướng đến màn hình thay đổi hình nền
    //     navigation.navigate('ChangeBackground');
    // };

    const handleAddMember = (group) => {
        navigation.navigate('AddMember', { group });
    };

    const handleViewMember = (group) => {
        navigation.navigate('ViewMember', { group, userData });
    };
    
    return (
        <SafeAreaView>
            <PageContainer>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 22, height: 60, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <MaterialIcons name="keyboard-arrow-left" size={35} color={COLORS.black} />
                            </TouchableOpacity>
                            <Text style={{ ...FONTS.h4, marginLeft: 8 }}>Tùy chọn</Text>
                        </View>
                    </View>

                    {/* Hình ảnh và tên */}
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: group.avatar }} style={styles.profileImage} />
                        <Text style={styles.profileName}>{group.groupName}</Text>
                    </View>

                    {/* Các tùy chọn */}
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.option}
                        // onPress={handleNavigateToMessage} 
                        >
                            <MaterialIcons name="message" size={24} color="#574E92" />
                            <Text style={styles.optionText}>Tìm tin nhắn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleAddMember(group)} style={styles.option}>
                            <MaterialIcons name="person-add" size={24} color="#574E92" />
                            <Text style={styles.optionText}>Thêm thành viên</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}
                        // onPress={handleNavigateToChangeBackground} 
                        >
                            <MaterialIcons name="image" size={24} color="#574E92" />
                            <Text style={styles.optionText}>Đổi hình nền</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Tùy chọn hàng dọc */}
                    <View style={styles.verticalOptionsContainer}>
                        <TouchableOpacity onPress={() => handleViewMember(group)} style={styles.option2}>
                            <MaterialIcons name="group" size={24} color="#574E92" />
                            <Text style={styles.optionText}>Xem thành viên</Text>
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
        marginTop: 10
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 22.5,
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

export default OptionsGroup;