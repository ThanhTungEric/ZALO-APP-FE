import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../CSS/styles';
const SwitchAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Chuyển tài khoản</Text>
            </View>
            <ScrollView>
                <Text style={{textAlign:'center', marginTop: 10}}>Thêm tài khoản để đăng nhập nhanh</Text>

                <View style={{height: 600, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', height: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <View>  
                            <Image source={require('../../assets/dog.png')} style={{ width: 45, height: 45, borderRadius: 22.5, top:5 }}/>
                            <AntDesign name="checkcircle" size={12} color="green" style={{left: 30, bottom: 5}}/>
                        </View>  
                        <Text>Lê Quang Trung</Text>
                        <Text style={{fontSize: 12, color:'grey'}}>Đã đăng nhập</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row'}}>
                        <View style={{width: 45, height: 45, borderRadius: 22.5, backgroundColor:'#E9ECF4', alignItems: 'center', justifyContent:'center', left: 10}}>
                            <Entypo name="plus" size={20} color="#574E92" />
                        </View>
                        <Text style={{left:25, color:'#574E92' }}>Thêm tài khoản</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
export default SwitchAccount;
