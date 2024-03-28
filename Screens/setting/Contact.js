import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Contact = ({ navigation }) => {

    const [suggestToggle, setSuggestToggle] = useState(false);

    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: "#574E92", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={{color: 'white', left: 20, fontSize: 18}}>Danh bạ</Text>
            </View>
            <ScrollView>
                <View style={{ height: 100, backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 50, flexDirection:'row'}}>
                        <View>
                            <Text style={{left: 20}}>Cập nhật danh bạ Zalo</Text>
                            <Text style={{left: 20, color:'grey', fontSize: 13}}>Lần gần nhất: 11/01/2024 13:00</Text>
                        </View>
                        <Text style={{left: 110, color: 'grey', fontSize: 13}}>Tự động</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 50, flexDirection:'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Hiện liên hệ trong danh bạ</Text>
                        <Text style={{right: 20, color: 'grey', fontSize: 13}}>Tất cả liên hệ</Text>
                    </Pressable>
                </View>
                <View style={{ height: 150, backgroundColor: '#fff', marginTop: 10}}>
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
        </View>
    );
}
export default Contact;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#E8ECF4',
        height: 670,
    },
    toggleBtn: {
        width: 50,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#ccc",
        justifyContent: "center",
        marginLeft: 110,
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
        transform: [{ translateX: 22 }],
    },
});