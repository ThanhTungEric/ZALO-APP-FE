import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { styles } from "../../../CSS/styles";

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Thông tin về Zalo</Text>
            </View>
            <ScrollView>
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', height: 70, backgroundColor: '#fff'}}>
                    <View style={{left: 20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text>Phiên bản 23.12.02</Text>
                            <AntDesign name="checkcircle" size={17} color="green" style={{left:10}}/>
                        </View>
                        <Text style={{fontSize: 10, color:'grey'}}>Bạn đang dùng phiên bản mới nhất</Text>
                    </View>
                </Pressable>

                <View style={{ height: 210, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Zalo A-Z: Hướng dẫn sử dụng</Text>
                        <View style={{display: 'flex', width: 30, height: 30, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5, left:155}}>
                            <Feather name="external-link" size={20} color="black" />
                        </View>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Liên hệ hỗ trợ</Text>
                        <View style={{display: 'flex', width: 30, height: 30, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5 , left:250}}>
                            <AntDesign name="message1" size={20} color="black" />
                        </View>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Gửi QoS</Text>
                    </Pressable>
                </View>

                <Pressable style={{ flexDirection: 'row', alignItems: 'center', height: 50, backgroundColor: '#fff', marginTop: 10}}>
                    <View style={{left: 20}}>
                        <Text>Điều khoản sử dụng</Text>
                    </View>
                </Pressable>
            
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
export default About;
