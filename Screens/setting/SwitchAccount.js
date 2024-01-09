import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';

const SwitchAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#0091FF', height: 40}}>
                <Pressable onPress={()=> navigation.navigate('Setting')}>
                    <AntDesign name="left" size={22} color="white" style={{right: 50}} />
                </Pressable>
                <Text style={{fontSize: 18, color: 'white', right: 150}}>Chuyển tài khoản</Text>
            </View>

            <ScrollView>
                <Text style={{textAlign:'center', marginTop: 10}}>Thêm tài khoản để đăng nhập nhanh</Text>

                <View style={{height: 600, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', height: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <View>  
                            <Image source={require('../../assets/dog.png')} style={{ width: 45, height: 45, borderRadius: '50%', right: 20, top:5 }}/>
                            <AntDesign name="checkcircle" size={12} color="green" style={{left:10, bottom: 5}}/>
                        </View>  
                        <Text style={{right:65}}>Lê Quang Trung</Text>
                        <Text style={{fontSize: 12, color:'grey'}}>Đã đăng nhập</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row'}}>
                        <View style={{width: 45, height: 45, borderRadius: '50%', backgroundColor:'#E9ECF4', alignItems: 'center', justifyContent:'center', left: 10}}>
                            <Entypo name="plus" size={20} color="#6BAEF5" />
                        </View>
                        <Text style={{left:25, color:'#6BAEF5' }}>Thêm tài khoản</Text>
                    </Pressable>
                </View>

                
            
            </ScrollView>
        </View>
    );
}
export default SwitchAccount;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        height: 670,
    },
});