import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View, ScrollView, Pressable,  Image} from 'react-native';

function QA() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ height: 70, backgroundColor: '#fff'}}>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
                        {/* <Image source={require('../assets/music.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/> */}
                        <Text style={{left: 30 }}>Tìm thêm Official Account</Text>
                    </Pressable>
                </View>
                {/* <View style={{ height: 450, backgroundColor: '#fff', marginTop: 10}}>
                    <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
                        <Text style={{left: 20, color: 'black', fontSize: 16}}>Official Account đang quan tâm</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row'}}>
                        <Image source={require('../assets/newspaper.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/>
                        <Text style={{left: 30}}>Báo mới</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Image source={require('../assets/cloud.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/>        
                        <Text style={{left: 30}}>Thời tiết</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Image source={require('../assets/zalopay.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/> 
                        <Text style={{left: 30}}>ZaloPay</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Image source={require('../assets/zalo.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/> 
                        <Text style={{left: 30}}>Zalo Hỗ Trợ IOS</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Image source={require('../assets/zalosticker.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/>
                        <Text style={{left: 30}}>Zalo Sticker</Text>
                    </Pressable>
                    <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                        <Image source={require('../assets/zingmp3.png')} style={{ width: 45, height: 45, borderRadius: 22.5, left: 15 }}/> 
                        <Text style={{left: 30}}>Zing MP3</Text>
                    </Pressable>
                </View> */}
            </ScrollView>
        </View>    
    );
}

export default QA;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
  },
});