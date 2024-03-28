import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable,  Image, SectionList } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome, Ionicons   } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const DATA = [
    {
        title: 'C',
        data: [
        { image: require('../../assets/ava1.png'), name: 'Chí Thanh IUH' },
        ],
    },
    {
        title: 'L',
        data: [
        { image: require('../../assets/dog.png'), name: 'Lê Quang Trung' },
        ],
    },
    {
        title: 'N',
        data: [
        { image: require('../../assets/ava3.png'), name: 'Nguyễn Thanh Tùng' },
        ],
    },
    {
        title: 'V',
        data: [
        { image: require('../../assets/ava2.png'), name: 'Võ Hoàng Minh Sang' },
        ],
    },
];

function FriendScreen({ navigation, route }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 180, backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}
                        onPress={()=> navigation.navigate('FriendRequest')}>
                        <View style={{display: 'flex', width: 45, height: 45, backgroundColor: "#7E57C2", alignItems: "center", justifyContent: "center", borderRadius: 22.5, left: 10}}>
                            <MaterialIcons name="group" size={24} color="white" />
                        </View>
                        <Text style={{left: 25 }}>Lời mời kết bạn</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <View style={{display: 'flex', width: 45, height: 45, backgroundColor: "#7E57C2", alignItems: "center", justifyContent: "center", borderRadius: 22.5, left: 10}}>
                            <AntDesign name="contacts" size={24} color= "white" />
                        </View>
                        <Text style={{left: 25 }}>Danh bạ máy</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
                        <View style={{display: 'flex', width: 45, height: 45, backgroundColor: "#7E57C2", alignItems: "center", justifyContent: "center", borderRadius: 22.5, left: 10, }}>
                            <FontAwesome name="birthday-cake" size={24} color="white" />
                        </View>
                        <Text style={{left: 25 }}>Lịch sinh nhật</Text>
                    </Pressable>
                </View>
                <View style={{ height: 500, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E8ECF4', marginTop: 10}}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({item}) => (
                        <Pressable style={{alignItems: 'center', height: 50, flexDirection:'row'}}>    
                            <Image source={item.image} resizeMode='contain' style={{width: 40, height: 40, left: 10}}></Image>
                            <Text style={{left: 20,}}>{item.name}</Text>
                            <View  style={{marginLeft: 'auto', flexDirection: 'row'}}>
                                <Ionicons name="call-outline" size={24} color="grey" />
                                <Feather name="video" size={24} color="grey" />
                            </View>
                        </Pressable>   
                        )}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={{fontSize: 18}}>{title}</Text>
                        )}
                    />
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </View>    
    );
}

export default FriendScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
  },
});