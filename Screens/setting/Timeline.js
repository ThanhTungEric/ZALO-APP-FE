import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Timeline = ({ navigation }) => {

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
                <Text style={{color: 'white', left: 20, fontSize: 18}}>Nhật ký</Text>
            </View>
            <ScrollView>
                <View style={{ height: 100, backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 50, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Tiện ích</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 50, flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{left: 20 }}>Phân loại nhật ký</Text>
                        <Text style={{right: 20, color: 'grey', fontSize: 13}}>Đang tắt</Text>
                    </Pressable>
                </View>
                <View style={{ height: 210, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Tùy chọn</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <Text style={{left: 20 }}>Tự động phát video</Text>
                        <Text style={{left: 130, color: 'grey', fontSize: 13}}>Luôn tự động phát</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Tự động phát bài hát</Text>
                        <Text style={{left: 120, color: 'grey', fontSize: 13}}>Luôn tự động phát</Text>
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
                <View style={{ height: 210, backgroundColor: '#fff', marginTop: 10}}>
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
        </View>
    );
}
export default Timeline;
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
        marginLeft: 150,
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