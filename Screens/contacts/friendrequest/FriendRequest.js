import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Received from './Reveived';
import Sent from './Sent';
import { styles } from '../../../CSS/styles';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
const Tab = createMaterialTopTabNavigator();

function FriendRequest({ navigation, route }) {
    const { t } = useTranslation('contact');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backButton}>
                    <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} />
                </Pressable>
                <Text style={styles.title}> {t('friend request')} </Text>
                <AntDesign name="setting" size={22} color="white" />
            </View>
            <Tab.Navigator initialRouteName="Đã nhận"
                screenOptions={{
                    tabBarLabelStyle: { textTransform: 'none' },
                    tabBarActiveTintColor: '#574E92',
                    tabBarInactiveTintColor: 'grey',
                }}>
                <Tab.Screen name={t('sent')} component={Received} />
                <Tab.Screen name={t('receive')} component={Sent} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </View>
    );
}
export default FriendRequest;
