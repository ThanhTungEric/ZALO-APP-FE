import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { styles } from "../../CSS/styles"

const Timeline = ({ navigation }) => {

    const [suggestToggle, setSuggestToggle] = useState(false);

    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Nhật ký</Text>
            </View>
            <ScrollView>
                <View style={{backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 50, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Tiện ích</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 50, flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{left: 20 }}>Phân loại nhật ký</Text>
                        <Text style={{right: 20, color: 'grey', fontSize: 13}}>Đang tắt</Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Tùy chọn</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <Text style={{left: 20 }}>Tự động phát video</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Tự động phát bài hát</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Gợi ý sticker khi bình luận</Text>
                        <TouchableOpacity
                            style={[styles.toggleBtn, suggestToggle ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setSuggestToggle)}
                        >
                            <View style={[styles.circle, suggestToggle ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                    </Pressable>
                </View>
                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Quyền riêng tư</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <Text style={{left: 20 }}>Chặn xem nhật ký</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 225}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Chặn xem khoảnh khắc</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 190}}/>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Ẩn khỏi nhật ký</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 240}}/>
                    </Pressable>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
export default Timeline;
