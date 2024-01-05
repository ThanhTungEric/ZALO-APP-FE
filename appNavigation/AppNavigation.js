import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Messages from "../Screens/Messages";
import Contacts from "../Screens/Contacts";
import Discovery from "../Screens/Discovery";
import Timeline from "../Screens/Timeline";
import Me from "../Screens/Me";
import Setting from "../Screens/setting/Setting"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator initialRouteName="Tin nhắn">
        <Tab.Screen name="Tin nhắn" component={Messages}
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <AntDesign name="message1" size={20} color={focused ? "#3685E4" : "#bababa"} />
                </View>
            );
            },
        }}
        />
        <Tab.Screen name="Danh bạ" component={Contacts} 
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <AntDesign name="contacts" size={20} color={focused ? "#3685E4" : "#bababa"} />
                </View>
            );
            },
        }}
        />
        <Tab.Screen name="Khám phá" component={Discovery} 
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <AntDesign name="appstore-o" size={20} color={focused ? "#3685E4" : "#bababa"} />
                </View>
            );
            },
        }}
        />
        <Tab.Screen name="Nhật ký" component={Timeline} 
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <MaterialCommunityIcons name="clock-time-seven-outline" size={20} color={focused ? "#3685E4" : "#bababa"} />
                </View>
            );
            },
        }}
        />
        <Tab.Screen name="Cá nhân" component={Me} 
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <AntDesign name="user" size={20} color={focused ? "#3685E4" : "#bababa"} />
                </View>
            );
            },
        }}
        />
    </Tab.Navigator>
);


const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigation