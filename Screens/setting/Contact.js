import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { styles } from "../../CSS/styles"
const Contact = ({ navigation }) => {

    const [suggestToggle, setSuggestToggle] = useState(false);

    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Danh bạ</Text>
            </View>
            <ScrollView>
                <View style={{backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row'}}>
                        <View>
                            <Text style={{left: 20}}>Cập nhật danh bạ Zalo</Text>
                            <Text style={{left: 20, color:'grey', fontSize: 13}}>Lần gần nhất: 11/01/2024 13:00</Text>
                        </View>
                        <Text style={{left: 110, color: 'grey', fontSize: 13}}>Tự động</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20}}>Hiện liên hệ trong danh bạ</Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Nguồn tìm kiếm và kết bạn</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <View>
                            <Text style={{left: 20 }}>Tự động kết bạn từ danh bạ máy</Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.toggleBtn, suggestToggle ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setSuggestToggle)}
                        >
                            <View style={[styles.circle, suggestToggle ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Quản lý nguồn tìm kiếm và kết bạn</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 130}}/>
                    </Pressable>
                </View>
                
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
export default Contact;
