import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Messages from "../screens/messages/Messages";
import Contacts from "../screens/contacts/Contacts";
import Me from "../screens/setting/me/Me";
import Setting from "../screens/setting/Setting";
import About from "../screens/setting/about/About";
import SwitchAccount from "../screens/setting/switchaccount/SwitchAccount";
import Theme from "../screens/setting/theme/Theme";
import Message from "../screens/setting/message/Message";
import Notification from "../screens/setting/notification/Notification";
import Privacy from "../screens/setting/privacy/Privacy";
import Birthday from "../screens/setting/privacy/Birthday";
import AccountSecurity from "../screens/setting/accountsecurity/AccountSecurity";
import ChangePhone from "../screens/setting/accountsecurity/ChangePhone";
import ChangePhone1 from "../screens/setting/accountsecurity/ChangePhone1";
import ChangePassword from "../screens/setting/accountsecurity/ChangePassword";
import Login from "../screens/login/Login";
import Signup from "../screens/login/Signup";
import Forgotpw from "../screens/login/Forgotpw"
import FriendRequest from "../screens/contacts/friendrequest/FriendRequest"
import AuthenOTP from "../screens/otp/AuthenOTP";
import Welcome from "../screens/login/Welcome";
// import Chat from "../screens/chat/Chat"
import { COLORS } from '../constrants/theme'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: COLORS.white,
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 60,
            },
        }} >
        <Tab.Screen name="Danh bạ" component={Contacts}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center',}}>
                            {focused ? (
                                <>
                                    <FontAwesome name="circle" size={8} color={COLORS.black}/>
                                </>
                            ) : (
                                <Feather name="users" size={24} color={COLORS.black}/>
                            )}
                        </View>
                    )
                },
            }}
        />
        <Tab.Screen name="Tin nhắn" component={Messages}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            {focused ? (
                                <>
                                    <FontAwesome name="circle" size={8} color={COLORS.black} />
                                </>
                            ) : (
                                <Ionicons name="chatbubble-outline" size={24} color={COLORS.black}/>
                            )}
                        </View>
                    )
                },
            }}
        />
        <Tab.Screen name="Thêm" component={Setting}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ alignItems: 'center',justifyContent: 'center',}}>
                            {focused ? (
                                <>
                                    <FontAwesome name="circle" size={8} color={COLORS.black}/>
                                </>
                            ) : (
                                <Feather name="more-horizontal" size={24} color={COLORS.black}/>
                            )}
                        </View>
                    )
                },
            }}
        />
    </Tab.Navigator>
);


const AppNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
            <Stack.Screen name="SwitchAccount" component={SwitchAccount} options={{ headerShown: false }} />
            <Stack.Screen name="Theme" component={Theme} options={{ headerShown: false }} />
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
            <Stack.Screen name="Birthday" component={Birthday} options={{ headerShown: false }} />
            <Stack.Screen name="AccountSecurity" component={AccountSecurity} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePhone" component={ChangePhone} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePhone1" component={ChangePhone1} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Forgotpw" component={Forgotpw} options={{ headerShown: false }} />
            <Stack.Screen name="AuthenOTP" component={AuthenOTP} options={{ headerShown: false }} />
            <Stack.Screen name="Me" component={Me} options={{ headerShown: false }} />
            <Stack.Screen name="FriendRequest" component={FriendRequest} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigation
