import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable,  Image, FlatList } from 'react-native';
import { AntDesign  } from '@expo/vector-icons';

const array = [
    {image: require('../assets/group1.png'), name: 'N3_NHÓM CÔNG NGHỆ MỚI'},
    {image: require('../assets/group2.png'), name: 'QLDA_N1_10Điểm'},
    {image: require('../assets/group3.png'), name: 'Tương tác người máy_nhóm 3'},
    {image: require('../assets/group4.png'), name: 'Nhóm 5_MHHDL'},
    {image: require('../assets/group5.png'), name: 'KTTKPM_1_3_T7_2023_2024'},
    {image: require('../assets/group6.png'), name: 'CNMOI_2023_SANGT7_4_6'},
  ]
  
function Group() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 70, backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        <View style={{display: 'flex', width: 40, height: 40, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5, left:15}}>
                            <AntDesign name="addusergroup" size={24} color="#2F62AB" />
                        </View>
                        <Text style={{left: 30, color: '#2F62AB'  }}>Tạo nhóm mới</Text>
                    </Pressable>
                </View>
                <View style={{ height: 120, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 40, flexDirection:'row'}}>
                        <Text style={{left: 20, color: 'black', fontSize: 16}}>Tạo nhóm với:</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 80, flexDirection:'row', justifyContent: 'space-around', alignItems: 'center'}}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{display: 'flex', width: 50, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5}}>
                                <Image source={require('../assets/calendar.png')} style={{ width: 50, height: 50, borderRadius: 22.5}}/>
                            </View>
                            <Text style={{color: 'grey'}}>Lịch</Text>
                        </View>  
                        <View style={{alignItems: 'center'}}>
                            <View style={{display: 'flex', width: 50, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5}}>
                                <Image source={require('../assets/clock.png')} style={{ width: 50, height: 50, borderRadius: 22.5}}/>
                            </View>
                            <Text style={{color: 'grey'}}>Nhắc hẹn</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{display: 'flex', width: 50, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 22.5}}>
                                <Image source={require('../assets/group.png')} style={{ width: 50, height: 50, borderRadius: 22.5}}/>
                            </View>
                            <Text style={{color: 'grey'}}>Nhóm offline</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={{ backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: 'black', fontSize: 15}}>Nhóm đang tham gia</Text>
                    </Pressable>
                    <FlatList
                        numColumns={1}
                        data={array}
                        renderItem={({item}) =>
                        <Pressable style={styles.listItemContainer}>    
                            <Image source={item.image} resizeMode='contain' style={{width: 60, height: 60, left: 10}}></Image>
                            <Text style={styles.listItemText}>{item.name}</Text>
                        </Pressable>    
                        }>
                    </FlatList>   
                </View>
            </ScrollView>
        </View>    
    );
}

export default Group;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
      },
    listItemContainer: {
        alignItems: 'center',
        height: 70,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E8ECF4',
    },
    listItemText: {
        bottom: 10,
        left: 20,
    },
});
