import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable,  Image, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const array = [
    {image: require('../assets/dog.png'), name: 'Lê Quang Trung'},
    {image: require('../assets/ava1.png'), name: 'Chí Thanh IUH'},
    {image: require('../assets/ava3.png'), name: 'Thanh Tùng'},
    {image: require('../assets/ava2.png'), name: 'Võ Hoàng Minh Sang'},
  ]

function Sent() {
    return (
      <View style={styles.container}>
        <ScrollView>
            <View style={{ height: 600, backgroundColor: '#fff'}}>
                <FlatList
                    numColumns={1}
                    data={array}
                    renderItem={({item}) =>
                    <Pressable style={{alignItems: 'center', height: 70, flexDirection:'row', borderColor: '#E8ECF4',}}>    
                        <Image source={item.image}  style={{borderRadius: 22.5, width: 50, height: 50, left: 20}}></Image>
                        <View style={{ bottome: 20, left: 40}}>
                            <Text>{item.name}</Text>
                            <Text style={{fontSize: 13, color:'grey', marginTop: 5}}>Có thể bạn quen</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', width: 80, height: 35, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30}}>
                            <Text >Thu hồi</Text>
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
  
export default Sent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8ECF4',
    }
});
