import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Friend from '../../Components/Friend';
import Group from '../../Components/Group';
import QA from '../../Components/QA';
import  { styles }  from '../../CSS/styles'; 
import { StatusBar } from 'expo-status-bar';

 
const Tab = createMaterialTopTabNavigator();

function Contacts() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="search1" size={22} color="white" style={styles.searchIcon} />
        <TextInput
          placeholder="Tìm kiếm"
          placeholderTextColor={'#D9D9D9'}
          style={styles.searchInput}
        />
        <Feather name="user-plus" size={22} color="white" />
      </View>
      <Tab.Navigator
        initialRouteName="Bạn bè"
        screenOptions={{
          tabBarLabelStyle: { textTransform: 'none' },
          tabBarActiveTintColor: '#574E92',
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Bạn bè" component={Friend} />
        <Tab.Screen name="Nhóm" component={Group} />
        <Tab.Screen name="QA" component={QA} />
      </Tab.Navigator>
      <StatusBar style="auto"/> 
    </View>
  );
}

export default Contacts;
