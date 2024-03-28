import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Received from './Reveived';
import Sent from './Sent';
const Tab = createMaterialTopTabNavigator();

function FriendRequest({ navigation, route }) {
    return (
        <View style={styles.container}>
           <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 50}}>
                <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={{color: 'white', width: 260, fontSize: 16}}>Lời mời kết bạn</Text>
                <AntDesign name="setting" size={22} color="white" />
            </View>
            <Tab.Navigator initialRouteName="Đã nhận"
                screenOptions={{
                    tabBarLabelStyle: { textTransform: 'none' },
                    tabBarActiveTintColor: '#574E92', 
                    tabBarInactiveTintColor: 'grey',
                  }}>
                <Tab.Screen name="Đã nhận" component={Received}/>
                <Tab.Screen name="Đã gửi" component={Sent}/>
            </Tab.Navigator>
        </View>
    );
}
export default FriendRequest;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E8ECF4',
      marginTop:20,  
      height: 670,
  },
});