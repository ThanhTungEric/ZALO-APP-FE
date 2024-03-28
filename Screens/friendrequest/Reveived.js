import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable,  Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const data = [
    {image: require('../../assets/ava1.png'), name: 'Chí Thanh IUH', text: 'Xin chào, mình là Chí Thanh IUH. Thấy bạn trong nhóm T2_7_9_KTTKPM_N1_HK2_23_24 nên mình muốn kết bạn!'},
    {image: require('../../assets/ava3.png'), name: 'Thanh Tùng', text: 'Xin chào, mình là Thanh Tùng. Thấy bạn trong nhóm T2_7_9_KTTKPM_N1_HK2_23_24 nên mình muốn kết bạn!'},
]

function Received() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{ height: 600, backgroundColor: '#fff'}}>
                <FlatList
                    numColumns={1}
                    data={data}
                    renderItem={({item}) =>
                    <Pressable style={{height: 230, flexDirection:'row', borderColor: '#E8ECF4', top: 10}}>    
                        <Image source={item.image}  style={{borderRadius: 22.5, width: 50, height: 50, left: 20}}></Image>
                        <View style={{ bottome: 20, left: 30}}>
                            <Text>{item.name}</Text>
                            <Text style={{fontSize: 13, color:'grey', marginTop: 5}}>Có thể bạn quen</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={5}
                                style={{ width: 280, height:80, textAlignVertical: 'top', borderRadius: 10, borderWidth: 1, top: 10 }}>
                                {item.text}
                            </TextInput>
                            <View style={{flexDirection:'row', top: 20}}>
                                <Pressable style={{width: 130, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30}}>
                                    <Text>Từ chối</Text>
                                </Pressable>
                                <Pressable style={{ left: 10, width: 130, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30}}>
                                    <Text style={{color: 'purple'}}>Đồng ý</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>    
                    }
                >
                </FlatList>  
            </View>
        </ScrollView>
        <StatusBar style="auto" />
      </View>    
    );
}

export default Received;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
    }
});