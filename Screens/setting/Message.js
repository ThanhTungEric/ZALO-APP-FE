import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";

const Message = ({ navigation }) => {
    const [ToggleGoiYGuiAnh, setToggleGoiYGuiAnh] = useState(true);
    const [ToggleGoiYSticker, setToggleGoiYSticker] = useState(true);
    const [ToggleGhiNhoCL, setToggleGhiNhoCL] = useState(true);
    const [ToggleGuiTinKhiEnter, setToggleGuiTinKhiEnter] = useState(true);
    const [ToggleThaIcon, setToggleThaIcon] = useState(true);
    const [ToggleTNThoai, setToggleTNThoai] = useState(false);
    const [ToggleKhoiPhuc, setToggleKhoiPhuc] = useState(true);
    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: "#18A0FB", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={{ fontWeight: '600', color: 'white', left: 20, fontSize: 18 }}>Tin nhắn</Text>
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff" }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: 'blue', fontWeight: 'bold', left: '20px', marginTop: 10 }}>Tiện ích</Text>
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Quản lý tin nhắn nhanh</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="black" /></View>
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Dùng bong bóng chat</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="black" /></View>
                    </Pressable>

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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Gợi ý gửi ảnh vừa chụp</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleGoiYGuiAnh ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleGoiYGuiAnh)}
                            >
                                <View style={[styles.circle, ToggleGoiYGuiAnh ? styles.activeCircle : null]} />
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Gợi ý sticker khi soạn tin nhắn</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleGoiYSticker ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleGoiYSticker)}
                            >
                                <View style={[styles.circle, ToggleGoiYSticker ? styles.activeCircle : null]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: 'blue', fontWeight: 'bold', left: '20px', marginTop: 10 }}>Quyền riêng tư</Text>
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Chặn tin nhắn</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="black" /></View>
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Ẩn trò chuyện</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}><AntDesign name="right" size={20} color="black" /></View>
                    </Pressable>
                </View>

                <View style={{ width: '100%', height: 'auto', backgroundColor: "#fff", marginTop: 10 }}>
                    <View style={{ height: 30 }}>
                        <Text style={{ color: 'blue', fontWeight: 'bold', left: '20px', marginTop: 10 }}>Tùy chọn</Text>
                    </View>
                    <View
                        style={{
                            height: 80,
                            width: '100%',
                            borderBottomWidth: 1,
                            borderColor: '#D9D9D9',
                            left: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={{ width: '80%', }}>
                            <View style={{ height: 20 }}>
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Ghi nhớ chất lượng ảnh và video cho lần gửi sau</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleGhiNhoCL ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleGhiNhoCL)}
                            >
                                <View style={[styles.circle, ToggleGhiNhoCL ? styles.activeCircle : null]} />
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Gửi tin nhắn khi nhấn Enter trên bàn phím</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleGuiTinKhiEnter ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleGuiTinKhiEnter)}
                            >
                                <View style={[styles.circle, ToggleGuiTinKhiEnter ? styles.activeCircle : null]} />
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Thả biểu tượng cảm xúc</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleThaIcon ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleThaIcon)}
                            >
                                <View style={[styles.circle, ToggleThaIcon ? styles.activeCircle : null]} />
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Tự động phát tin nhắn thoại</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleTNThoai ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleTNThoai)}
                            >
                                <View style={[styles.circle, ToggleTNThoai ? styles.activeCircle : null]} />
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Tự động phát Video</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Tự động tải về</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Chọn vị trí bắt đầu đọc</Text>
                            </View>
                        </View>
                        <View
                            style={{ width: 40, height: 40, right: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </Pressable>

                    
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
                                <Text style={{ fontSize: 16, fontWeight: '600' }}>Khôi phục trò chuyện vừa xóa</Text>
                            </View>
                        </View>
                        <View style={{ width: 'auto' }}>
                            <TouchableOpacity
                                style={[styles.toggleBtn, ToggleKhoiPhuc ? styles.activeBtn : null]}
                                onPress={() => toggleButton(setToggleKhoiPhuc)}
                            >
                                <View style={[styles.circle, ToggleKhoiPhuc ? styles.activeCircle : null]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );

}
export default Message;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },
    toggleBtn: {
        width: 40,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#ccc",
        marginLeft: "auto",
        justifyContent: "center",
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        marginHorizontal: 2,
    },
    activeBtn: {
        backgroundColor: '#3388E7',
        color: '#fff',
    },
    activeCircle: {
        transform: [{ translateX: 16 }],
    },
});