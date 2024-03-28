import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TextInput} from 'react-native';
import { AntDesign, Feather} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FriendScreen from './FriendScreen';
import GroupScreen from './GroupScreen';
import QAScreen from './QAScreen'; 
const Tab = createMaterialTopTabNavigator();

function Contacts() {

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 50}}>
        <AntDesign name="search1" size={22} color="white"/>
        <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
          style={{width: 260, height:40, color: "white"}}/>
        <Feather name="user-plus" size={22} color="white" />
      </View>
      <Tab.Navigator initialRouteName="Bạn bè"
        screenOptions={{
          tabBarLabelStyle: { textTransform: 'none' },
          tabBarActiveTintColor: '#574E92', 
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Bạn bè" component={FriendScreen}/>
        <Tab.Screen name="Nhóm" component={GroupScreen}/>
        <Tab.Screen name="QA" component={QAScreen}/>
      </Tab.Navigator>
    </View>    
  );

}
export default Contacts;

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      backgroundColor: '#E8ECF4',
      height: 670,
  },
});