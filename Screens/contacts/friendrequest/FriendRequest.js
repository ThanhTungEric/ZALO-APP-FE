import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Received from './Reveived';
import Sent from './Sent';
import { styles } from '../../../CSS/styles';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../../Components/PageContainer';

const Tab = createMaterialTopTabNavigator();

function FriendRequest({ navigation, route }) {
    return (
        <SafeAreaView>
            <PageContainer>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable style={styles.backButton}>
                            <AntDesign name="arrowleft" size={22} color="white" onPress={() => navigation.goBack()} />
                        </Pressable>
                        <Text style={styles.title}>Lời mời kết bạn</Text>
                        <AntDesign name="setting" size={22} color="white" />
                    </View>
                    <Tab.Navigator initialRouteName="Đã nhận"
                        screenOptions={{
                            tabBarLabelStyle: { textTransform: 'none' },
                            tabBarActiveTintColor: '#574E92',
                            tabBarInactiveTintColor: 'grey',
                        }}>
                        <Tab.Screen name="Đã nhận" component={Received} />
                        <Tab.Screen name="Đã gửi" component={Sent} />
                    </Tab.Navigator>
                    <StatusBar style="auto" />
                </View>
            </PageContainer>
        </SafeAreaView>
    );
}
export default FriendRequest;
