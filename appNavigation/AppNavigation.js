import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import Messages from "../Screens/messages/Messages";
import Contacts from "../Screens/contacts/Contacts";
import Discovery from "../Screens/discovery/Discovery";
import Me from "../Screens/me/Me";
import Setting from "../Screens/setting/Setting";
import About from "../Screens/setting/About";
import SwitchAccount from "../Screens/setting/SwitchAccount";
import Timeline from "../Screens/setting/Timeline";
import Contact from "../Screens/setting/Contact";
import Theme from "../Screens/setting/Theme";
import Calls from "../Screens/setting/Calls";
import Message from "../Screens/setting/Message";
import Notification from "../Screens/setting/Notification";
import Privacy from "../Screens/setting/Privacy";
import Birthday from "../Screens/setting/Birthday";
import AccountSecurity from "../Screens/setting/AccountSecurity";
import ChangePhone from "../Screens/setting/ChangePhone";
import ChangePhone1 from "../Screens/setting/ChangePhone1";
import ChangePassword from "../Screens/setting/ChangePassword";
import Login from "../Screens/login/Login";
import Signup from "../Screens/login/Signup";
import Forgotpw from "../Screens/login/Forgotpw"
import FriendRequest from "../Screens/friendrequest/FriendRequest";
import AuthenOTP from "../Screens/otp/AuthenOTP";
import Welcome from "../Screens/login/Welcome";
import Profile from "../Screens/me/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator >
        <Tab.Screen name="Tin nhắn" component={Messages}
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <AntDesign name="message1" size={20} color={focused ? "#574E92" : "#bababa"} />
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
                    <AntDesign name="contacts" size={20} color={focused ? "#574E92" : "#bababa"} />
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
                    <AntDesign name="appstore-o" size={20} color={focused ? "#574E92" : "#bababa"} />
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
                    <AntDesign name="user" size={20} color={focused ? "#574E92" : "#bababa"} />
                </View>
            );
            },
        }}
        />
        <Tab.Screen name="Thêm" component={Setting} 
        options={{
            headerShown: false, 
            tabBarIcon: ({focused}) => { 
            return (
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <MaterialIcons name="more-horiz" size={20} color={focused ? "#574E92" : "#bababa"} />
                </View>
            );
            },
        }}
        />
    </Tab.Navigator>
);


const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false}} />
            <Stack.Screen name="About" component={About} options={{ headerShown: false}} />
            <Stack.Screen name="SwitchAccount" component={SwitchAccount} options={{ headerShown: false}} />
            <Stack.Screen name="Timeline" component={Timeline} options={{ headerShown: false}} />
            <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false}} />
            <Stack.Screen name="Theme" component={Theme} options={{ headerShown: false}} />
            <Stack.Screen name="Calls" component={Calls} options={{ headerShown: false}} />
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false}} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false}} />
            <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false}} />
            <Stack.Screen name="Birthday" component={Birthday} options={{ headerShown: false}} />
            <Stack.Screen name="AccountSecurity" component={AccountSecurity} options={{ headerShown: false}} />
            <Stack.Screen name="ChangePhone" component={ChangePhone} options={{ headerShown: false}} />
            <Stack.Screen name="ChangePhone1" component={ChangePhone1} options={{ headerShown: false}} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false}} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}} />
            <Stack.Screen name="Forgotpw" component={Forgotpw} options={{ headerShown: false}} />
            <Stack.Screen name="FriendRequest" component={FriendRequest} options={{ headerShown: false}} />
            <Stack.Screen name="AuthenOTP" component={AuthenOTP} options={{ headerShown: false}} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigation