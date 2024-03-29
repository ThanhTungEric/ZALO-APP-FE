import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable,  Image, SectionList } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome, Ionicons   } from '@expo/vector-icons';

const DATA = [
    {
        title: 'C',
        data: [
        { image: require('../assets/ava1.png'), name: 'Chí Thanh IUH' },
        ],
    },
    {
        title: 'L',
        data: [
        { image: require('../assets/dog.png'), name: 'Lê Quang Trung' },
        ],
    },
    {
        title: 'N',
        data: [
        { image: require('../assets/ava3.png'), name: 'Nguyễn Thanh Tùng' },
        ],
    },
    {
        title: 'V',
        data: [
        { image: require('../assets/ava2.png'), name: 'Võ Hoàng Minh Sang' },
        ],
    },
];

function Friend({ navigation, route }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 180, backgroundColor: '#fff'}}>
                    <Pressable style={styles.header}
                        onPress={()=> navigation.navigate('FriendRequest')}>
                        <View style={styles.viewHeader}>
                            <MaterialIcons name="group" size={24} color="white" />
                        </View>
                        <Text style={styles.textHeader}>Lời mời kết bạn</Text>
                    </Pressable>
                    <Pressable style={styles.header}>
                        <View style={styles.viewHeader}>
                            <AntDesign name="contacts" size={24} color= "white" />
                        </View>
                        <Text style={styles.textHeader}>Danh bạ máy</Text>
                    </Pressable>
                    <Pressable style={styles.header}>
                        <View style={styles.viewHeader}>
                            <FontAwesome name="birthday-cake" size={24} color="white" />
                        </View>
                        <Text style={styles.textHeader}>Lịch sinh nhật</Text>
                    </Pressable>
                </View>
                <View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: '#E8ECF4', marginTop: 10}}>
                    <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({item}) => (
                        <Pressable style={styles.listItemContainer}>    
                            <Image source={item.image} resizeMode='contain' style={{width: 40, height: 40, left: 10}}></Image>
                            <Text style={styles.listItemText}>{item.name}</Text>
                            <View style={styles.listItemIconContainer}>
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
        </View>    
    );
}

export default Friend;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
    },
    header:{
        alignItems: 'center', 
        height: 60, 
        flexDirection:'row',
    },
    viewHeader:{
        display: 'flex', 
        width: 45, 
        height: 45, 
        backgroundColor: "#7E57C2", 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 22.5, 
        left: 10,
    },
    textHeader:{
        left: 25
    },
    listItemContainer: {
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
    },
    listItemText: {
        left: 20,
    },
    listItemIconContainer: {
        marginLeft: 'auto',
        flexDirection: 'row',
    },
});