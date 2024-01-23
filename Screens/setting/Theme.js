import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Theme = ({ navigation }) => {

    const [suggestToggle, setSuggestToggle] = useState(false);

    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
      };

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 40}}>
                <Pressable onPress={()=> navigation.navigate('Setting')}>
                    <AntDesign name="left" size={22} color="white" style={{right: 60}} />
                </Pressable>
                <Text style={{fontSize: 18, color: 'white', right: 200}}>Giao diện</Text>
            </View>

            <ScrollView>
                <View style={{ height: 190, backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Giao diện</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 100, flexDirection:'row'}}>
                       
                        
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <Text style={{left: 20 }}>Đổi cỡ chữ</Text>
                        <Text style={{left: 220, color:'grey'}}>Trung bình</Text>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 230}}/>
                    </Pressable>
                </View>
                <View style={{ height: 90, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: '#2F62AB', fontWeight: 'bold' }}>Ngôn ngữ</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <Text style={{left: 20 }}>Thay đổi ngôn ngữ</Text>
                        <Image source={require('../../assets/vietnam.png')} style={{ width: 25, height: 25, borderRadius: '50%', left: 155 }}/>
                        <Text style={{left: 160, color:'grey'}}>Tiếng việt</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}
export default Theme;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        height: 670,
    },
    toggleBtn: {
        width: 50,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#ccc",
        justifyContent: "center",
        marginLeft: 50,
      },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#fff",
    },
    activeBtn: {
        backgroundColor: '#3388E7',
        color: '#fff',
    },
    activeCircle: {
        transform: [{ translateX: 22 }],
    },
});