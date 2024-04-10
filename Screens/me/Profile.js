import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Pressable, ImageBackground, PermissionsAndroid } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]);
            console.log('Camera permission granted?', granted);

            if (
                granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
                console.log('Camera permission granted');
                return true; // Trả về true nếu quyền được cấp
            } else {
                console.log('Camera permission denied');
                return false; // Trả về false nếu quyền không được cấp
            }
        } catch (err) {
            console.warn('Error requesting camera permission:', err);
            return false;
        }
    };

    const openImagePicker = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) return;

        const options = {
            mediaType: 'photo',
            // includeBase64: false,
            // maxHeight: 2000,
            // maxWidth: 2000,
        };
        launchImageLibrary(options, handleResponse);
    };

    const handleCameraLaunch = async () => {
        console.log('Trying to launch camera');
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) return;

        const options = {
            mediaType: 'photo',
            // includeBase64: false,
            // maxHeight: 2000,
            // maxWidth: 2000,
        };
        launchCamera(options, handleResponse);
    };

    const handleResponse = (response) => {
        console.log('Response from image picker:', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorMessage) {
            console.log('Image picker error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
            let imageUri = response.assets[0].uri;
            console.log('Selected image URI:', imageUri);
            setSelectedImage(imageUri);
        }
    };

    const getUser = async () => {
        try {
            const value = await AsyncStorage.getItem('userData');
            if (value !== null) {
                const parsedUser = JSON.parse(value);
                setUser(parsedUser);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground style={{ height: 400, paddingTop: 25 }} source={require('../../assets/dog.png')} >
                <AntDesign name="arrowleft" size={25} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleCameraLaunch} style={styles.avatar}>
                        {selectedImage && (
                            <Image
                                source={{ uri: selectedImage }}
                                style={{ flex: 1 }}
                                resizeMode="contain"
                            />
                        )}
                    </TouchableOpacity>
                    <Text style={styles.name}>{user.fullName}</Text>
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: '#fff' }}>
                <Text style={{ fontWeight: 'bold', left: '3%' }}>Thông tin cá nhân</Text>
                <View style={{ alignItems: 'center', height: 70, flexDirection: 'row' }}>
                    <Text style={{ left: '35%' }}>Giới tính</Text>
                    <Text style={styles.value}>Nam</Text>
                </View>
                <View style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}>
                    <Text style={{ left: '35%' }}>Ngày sinh</Text>
                    <Text style={styles.value}>{user.birthDate}</Text>
                </View>
                <View style={{ alignItems: 'center', height: 70, flexDirection: 'row' }}>
                    <Text style={{ left: '35%' }}>Điện thoại</Text>
                    <Text style={styles.value}>{user.phoneNumber}</Text>
                </View>
                <Pressable style={{ alignItems: 'center', justifyContent: 'center', height: 80, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', display: "flex", width: 350, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                        <AntDesign name="edit" size={24} color="black" />
                        <Text style={{ fontWeight: 'bold', left: 10 }}>Chỉnh sửa</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginTop: 'auto'
    },
    searchIcon: {
        marginLeft: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
        color: '#111111',
    },
    label: {
        fontSize: 16,
        color: '#888',
        marginBottom: 8,
    },
    value: {
        marginLeft: "15%",
        fontSize: 18,
        color: 'grey'
    },
    editButton: {
        backgroundColor: '#000',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    editButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ProfileScreen;
