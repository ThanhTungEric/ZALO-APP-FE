import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../../Components/PageContainer';
import { COLORS, FONTS } from '../../../constrants/theme';

const MyQR = () => {
    const navigation = useNavigation();
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

    return (
        <SafeAreaView>
            <PageContainer>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 22, height: 60, marginTop: 20 }}>
                        <MaterialIcons name="keyboard-arrow-left" size={40} color={COLORS.black} onPress={() => navigation.goBack()} />
                    </View>
                    {/* Hình ảnh và tên */}
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 500, height: 500, backgroundColor: "#574E92", borderRadius: 30 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 15, marginLeft: 15 }}>
                                <Image source={{ uri: user.avatar }} style={{ width: 60, height: 60 }} />
                                <Text style={{ color: "white", marginLeft: 5 }}>Danh thiếp CoToTa</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', borderTopWidth: 1, borderBottomWidth: 0, borderColor: '#E8ECF4', marginTop: 15 }}>
                                <Image source={require('../../../assets/qrtrung.png')} style={{ width: 230, height: 230, marginTop: 25 }} />
                                <Text style={{ ...FONTS.h4, marginVertical: 6, color: "white", marginTop: 25 }}>{user.fullName}</Text>
                                <Text style={{ color: "white", marginTop: 5 }}>Quét mã để thêm bạn CoToTa với tôi</Text>
                            </View>

                        </View>
                    </View>

                    {/* Footer */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 22, height: 100, marginTop: "auto", borderTopWidth: 1, borderBottomWidth: 0, borderColor: '#E8ECF4' }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#574E92', marginBottom: 4, }}>
                                <MaterialIcons name="share" size={30} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{ color: "black" }}>Chia sẻ</Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#574E92', marginBottom: 4, }}>
                                <MaterialIcons name="download" size={30} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{ color: "black" }}>Lưu</Text>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#574E92', marginBottom: 4, }}>
                                <MaterialIcons name="more-horiz" size={30} color={COLORS.white} />
                            </TouchableOpacity>
                            <Text style={{ color: "black" }}>Tùy chọn</Text>
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
        backgroundColor: '#fff'
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
        justifyContent: 'center',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato'
    }
});

export default MyQR;