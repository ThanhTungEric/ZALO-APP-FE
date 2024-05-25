import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../../Components/PageContainer';
import { COLORS, FONTS } from '../../../constrants/theme';


const ScanQR = () => {
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

    const handleNavigateToMyQR = () => {
        navigation.navigate('MyQR');
      };

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
                        <View style={{ width: 150, height: 50, backgroundColor: "grey", borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "white"}} onPress={handleNavigateToMyQR}>Mã QR của tôi</Text>
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

export default ScanQR;