import React, { useState, useEffect } from "react";
import { FlatList, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal, TextInput, View, Text, Image } from 'react-native'
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, FONTS } from '../../constrants/theme';
import Button from '../../Components/Button';
import PageTitle from '../../Components/PageTitle';
import {AntDesign} from '@expo/vector-icons';

export default function AuthenOTP() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");
    const [confirm, setConfirm] = useState(null);
    const navigation = useNavigation();

    const [areas, setAreas] = useState([])
    const [selectedArea, setSelectedArea] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log("Error sending code:", error);
        }
    };

    const confirmCode = async () => {
        try {
            const userCredential = await confirm.confirm(code);
            const user = userCredential.user;

            // check if the user is new or existing
            const userDocument = await firestore()
                .collection("users")
                .doc(user.uid)
                .get();
            if (userDocument.exists) {
                // User is existing, navigate to Home
                navigation.navigate("Home");
            } else {
                // User is new, navigate to Signup
                navigation.navigate("Signup", { uid: user.uid });
            }
        } catch (error) {
            console.log("Invalid code", error);
        }
    };

    // fectch codes from rescountries api

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                let areaData = data.map((item) => {
                    return {
                        code: item.alpha2Code,
                        item: item.name,
                        callingCode: `+${item.callingCodes[0]}`,
                        flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`,
                    }
                })

                setAreas(areaData)
                if (areaData.length > 0) {
                    let defaultData = areaData.filter((a) => a.code == 'VN')

                    if (defaultData.length > 0) {
                        setSelectedArea(defaultData[0])
                    }
                }
            })
    }, []);

    // render countries codes modal
    function renderAreasCodesModal() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={{ padding: 10, flexDirection: 'row', }}
                    onPress={() => { setSelectedArea(item), setModalVisible(false) }}
                >
                    <Image
                        source={{ uri: item.flag }}
                        style={{ height: 30, width: 30, marginRight: 10, }}
                    />
                    <Text style={{ ...FONTS.body3, color: COLORS.white }}>{item.item}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{ height: 400, width: SIZES.width * 0.8, color: '#fff', backgroundColor: '#342342', borderRadius: 12, }}>
                            <FlatList
                                data={areas}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.code}
                                verticalScrollIndicator={false}
                                style={{
                                    padding: 20,
                                    marginBottom: 20,
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFEA00', padding: 8, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 16 }}>
                    <AntDesign name="arrowleft" size={20} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {!confirm ? (
                        <>
                            <Text style={{ ...FONTS.h2, color: COLORS.white, marginTop: 80 }}>Nhập số điện thoại của bạn</Text>
                            <View style={{ width: '100%', paddingHorizontal: 22, paddingVertical: 60, }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 88, }}>
                                    <TouchableOpacity style={{ width: 100, height: 48, marginHorizontal: 5, borderRadius: SIZES.padding, borderColor: COLORS.secondaryWhite, borderWidth: 1, backgroundColor: COLORS.secondaryWhite, flexDirection: 'row', fontSize: 12, }}
                                        onPress={() => setModalVisible(true)}
                                    >
                                        <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                            <Image
                                                source={{ uri: selectedArea?.flag }}
                                                resizeMode="contain"
                                                style={{ width: 30, height: 30, }}
                                            />
                                        </View>
                                        <View style={{ justifyContent: 'center', marginLeft: 5, }}>
                                            <Text style={{ color: '#111', fontSize: 12 }}>{selectedArea?.callingCode}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {/* Phone Number Text Input */}
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            marginVertical: 10,
                                            borderColor: '#111',
                                            backgroundColor: COLORS.secondaryWhite,
                                            borderRadius: SIZES.padding,
                                            paddingLeft: SIZES.padding,
                                            height: 48,
                                            fontSize: 12,
                                            color: '#111',
                                        }}
                                        placeholder="Nhập số điện thoại của bạn"
                                        value={phoneNumber}
                                        onChangeText={setPhoneNumber}
                                        placeholderTextColor="#111"
                                        selectionColor="#111"
                                    />
                                </View>
                                <Button
                                    title="Gửi mã"
                                    onPress={signInWithPhoneNumber}
                                    style={{
                                        width: '100%',
                                        paddingVertical: 12,
                                        marginBottom: 48,
                                    }}
                                />
                            </View>
                        </>
                    ) : (
                        <>
                            <Text style={{ ...FONTS.h2, marginTop: 48, marginBottom: 22 }}>Nhập mã OTP</Text>
                            <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Chúng tôi đã gửi cho bạn một tin nhắn SMS chứa mã</Text>
                            <TextInput style={{ height: 50, width: "30%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, borderRadius: 20, }}
                                placeholder="Nhập mã"
                                value={code}
                                onChangeText={setCode} />
                            <Button
                                title="Gửi mã"
                                disabled
                                onPress={confirmCode}
                                style={{
                                    width: '100%',
                                    paddingVertical: 12,
                                    marginBottom: 48,
                                }}
                            />
                        </>
                    )}
                </View>
                {renderAreasCodesModal()}
            </ScrollView>
        </SafeAreaView>
    )
}

