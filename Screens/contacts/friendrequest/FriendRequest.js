import React from 'react'
import { Text, View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Received from './Received';
import Sent from './Sent';
import { styles } from '../../../CSS/styles';
import { StatusBar } from 'expo-status-bar';

import { useTranslation } from 'react-i18next';
import PageContainer from '../../../Components/PageContainer';
const Tab = createMaterialTopTabNavigator();

function FriendRequest({ navigation }) {
    const { t } = useTranslation('contact');
    return (
        <SafeAreaView>
            <PageContainer>
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
                        <Tab.Screen name={t('receive')} component={Received} />
                        <Tab.Screen name={t('sent')} component={Sent} />
                    </Tab.Navigator>
                    <StatusBar style="auto" />
                </View>
            </PageContainer>
        </SafeAreaView>
    );
}
export default FriendRequest;
