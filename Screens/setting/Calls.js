import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";

const Calls = ({ navigation }) => {
    const [ToggleTBGoiNho, setToggleTBGoiNho] = useState(false);
    const [ToggleDongBo, setToggleDongBo] = useState(false);
    const [ToggleVideoCall, setToggleVideoCall] = useState(false);
    const [ToggleCGD, setToggleCGD] = useState(false);

    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: "#574E92", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={{color: 'white', left: 20, fontSize: 18}}>Cuộc gọi</Text>
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff" }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Âm thanh</Text>
                    </View>
                    <Pressable

                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'center'
                        }}>
                        <View style={{ width: '90%' }}>
                            <View style={{ height: 20 }}>
                                <Text>Nhạc chuông</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>

                    <Pressable

                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'center'
                        }}>
                        <View style={{ width: '90%' }}>
                            <View style={{ height: 20 }}>
                                <Text>Nhạc chờ</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>


                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Lịch sử cuộc gọi</Text>
                    </View>

                    <View
                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={{ width: '80%', }}>
                            <View style={{ height: 20 }}>
                                <Text>Thông báo cuộc gọi nhỡ từ điện thoại</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleTBGoiNho ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleTBGoiNho)}
                            >
                                <View style={[styles.circle, ToggleTBGoiNho ? styles.activeCircle : null]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={{ width: '80%', }}>
                            <View style={{ height: 20 }}>
                                <Text>Đồng bộ thông tin cuộc gọi từ điện thoại</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleDongBo ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleDongBo)}
                            >
                                <View style={[styles.circle, ToggleDongBo ? styles.activeCircle : null]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Cuộc gọi video</Text>
                    </View>

                    <View
                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={{ width: '80%', }}>
                            <View style={{ height: 20 }}>
                                <Text>Thu nhỏ màn hình khi gọi video</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleVideoCall ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleVideoCall)}
                            >
                                <View style={[styles.circle, ToggleVideoCall ? styles.activeCircle : null]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Cuộc gọi</Text>
                    </View>

                    <View
                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={{ width: '80%', }}>
                            <View style={{ height: 20 }}>
                                <Text>Thông báo cuộc gọi đến</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleCGD ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleCGD)}
                            >
                                <View style={[styles.circle, ToggleCGD ? styles.activeCircle : null]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Pressable

                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'center'
                        }}>
                        <View style={{ width: '90%' }}>
                            <View style={{ height: 20 }}>
                                <Text>Tắt thông báo cuộc gọi từ bạn bè</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>
                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Quyền riêng tư</Text>
                    </View>

                    <Pressable

                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'center'
                        }}>
                        <View style={{ width: '90%' }}>
                            <View style={{ height: 20 }}>
                                <Text>Cho phép gọi điện</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>

                    <Pressable

                        style={{
                            height: 60,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                            //justifyContent: 'center'
                        }}>
                        <View style={{ width: '90%' }}>
                            <View style={{ height: 20 }}>
                                <Text>Chặn cuộc gọi</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>
                </View>

            </ScrollView>
        </View>
    )

}
export default Calls;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },
    toggleBtn:{
        width: 50,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#ccc",
        marginLeft: "auto",
        justifyContent: "center",
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#fff",
    },
    activeBtn: {
        backgroundColor: '#574E92',
        color: '#fff',
    },
    activeCircle: {
        transform: [{ translateX: 22}],
    },
})