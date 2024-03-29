import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { styles } from "../../CSS/styles"

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
             <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Cuộc gọi</Text>
            </View>
            <ScrollView >
                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff" }}>
                    <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Âm thanh</Text>
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
                            <Text>Nhạc chuông</Text>
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
                            <Text>Nhạc chờ</Text>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>


                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Lịch sử cuộc gọi</Text>
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
                            <Text>Thông báo cuộc gọi nhỡ từ điện thoại</Text>
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
                            <Text>Đồng bộ thông tin cuộc gọi từ điện thoại</Text>
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
                    <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Cuộc gọi video</Text>
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
                            <Text>Thu nhỏ màn hình khi gọi video</Text>
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
                    <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Cuộc gọi</Text>
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
                            <Text>Thông báo cuộc gọi đến</Text>
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
                            <Text>Tắt thông báo cuộc gọi từ bạn bè</Text>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>
                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <Text style={{ color: '#2F62AB', fontWeight: 'bold', left: 20, marginTop: 10 }}>Quyền riêng tư</Text>
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
                           <Text>Cho phép gọi điện</Text>  
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
                            <Text>Chặn cuộc gọi</Text>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="#7A7E86" /></View>
                    </Pressable>
                </View>

            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )

}
export default Calls;
