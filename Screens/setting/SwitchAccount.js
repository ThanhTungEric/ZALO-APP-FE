import React from "react";
import { Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons';

const SwitchAccount = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 50, backgroundColor: "#574E92", flexDirection: 'row', alignItems: 'center' }}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={{color: 'white', left: 20, fontSize: 18}}>Chuyển tài khoản</Text>
            </View>
            <ScrollView>
                <Text style={{textAlign:'center', marginTop: 10}}>Thêm tài khoản để đăng nhập nhanh</Text>

                <View style={{height: 600, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', height: 70, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <View>  
                            <Image source={require('../../assets/dog.png')} style={{ width: 45, height: 45, borderRadius: 22.5, right: 20, top:5 }}/>
                            <AntDesign name="checkcircle" size={12} color="green" style={{left:10, bottom: 5}}/>
                        </View>  
                        <Text style={{right:65}}>Lê Quang Trung</Text>
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
        </View>
    );
}
export default SwitchAccount;
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#E8ECF4',
        height: 670,
    },
});