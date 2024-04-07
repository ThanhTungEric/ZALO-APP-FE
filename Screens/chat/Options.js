import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Options = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;

    const handleNavigateToMessage = () => {
        // Điều hướng đến màn hình tin nhắn
        navigation.navigate('Messages');
    };

    const handleNavigateToProfile = () => {
        // Điều hướng đến màn hình trang cá nhân
        navigation.navigate('Profile');
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
        navigation.navigate('AddToGroup');
    };

    const handleNavigateToViewGroup = () => {
        // Điều hướng đến màn hình xem nhóm chung
        navigation.navigate('ViewGroup');
    };

    const handleBlockChat = () => {
        // Xử lý chặn trò chuyện ở đây
        console.log("Chặn trò chuyện");
    };

    const handleClearChatHistory = () => {
        // Xử lý xóa lịch sử trò chuyện ở đây
        console.log("Xóa lịch sử trò chuyện");
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <MaterialIcons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Tùy Chọn</Text>
            </View>
            {/* Hình ảnh và tên */}
            <View style={styles.profileContainer}>
                <Image source={item.image} style={styles.profileImage} />

                <Text style={styles.profileName}>{item.name}</Text>
            </View>
            {/* Các tùy chọn */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={handleNavigateToMessage} style={styles.option}>
                    <MaterialIcons name="message" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Tìm tin nhắn</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToProfile} style={styles.option}>
                    <MaterialIcons name="person" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Trang cá nhân</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToChangeBackground} style={styles.option}>
                    <MaterialIcons name="image" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Đổi hình nền</Text>
                </TouchableOpacity>
            </View>
            {/* Tùy chọn hàng dọc */}
            <View style={styles.verticalOptionsContainer}>
                <TouchableOpacity onPress={handleNavigateToCreateGroup} style={styles.option2}>
                    <MaterialIcons name="group-add" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Tạo nhóm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToAddToGroup} style={styles.option2}>
                    <MaterialIcons name="person-add" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Thêm vào nhóm</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToViewGroup} style={styles.option2}>
                    <MaterialIcons name="group" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Xem nhóm chung</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBlockChat} style={styles.option2}>
                    <MaterialIcons name="block" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Chặn trò chuyện</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleClearChatHistory} style={styles.option2}>
                    <MaterialIcons name="delete" size={24} color="#574E92" />
                    <Text style={styles.optionText}>Xóa lịch sử trò chuyện</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: "#574E92",
        height: 50,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 24,
        marginTop: 10,
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
