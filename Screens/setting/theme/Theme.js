import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from '../../../CSS/styles';

const Theme = ({ navigation }) => {

    const [suggestToggle, setSuggestToggle] = useState(false);
    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} style={styles.searchIcon} />
                <Text style={styles.title}>Giao diện</Text>
            </View>
            <ScrollView>
                <View style={{ backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Giao diện</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20}}>Đổi cỡ chữ</Text>
                        <Text style={{marginLeft: 'auto',color:'grey'}}>Trung bình</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 230}}/>
                    </Pressable>
                </View>
                <View style={{backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Ngôn ngữ</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <Text style={{left: 20 }}>Thay đổi ngôn ngữ</Text>
                        <Image source={require('../../../assets/vietnam.png')} style={{ width: 25, height: 25, borderRadius: 22.5, marginLeft: 'auto' }}/>
                        <Text style={{marginLeft: 'auto', color:'grey'}}>Tiếng việt</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}
export default Theme;
