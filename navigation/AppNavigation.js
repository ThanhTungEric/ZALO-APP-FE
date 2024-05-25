import React from "react";
import { NotificationProvider } from '../Screens/contacts/NotificationContext';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import Messages from "../Screens/messages/Messages";
import Contacts from "../Screens/contacts/Contacts";
import Me from "../Screens/setting/me/Me";
import Setting from "../Screens/setting/Setting";
import About from "../Screens/setting/about/About";
import SwitchAccount from "../Screens/setting/switchaccount/SwitchAccount";
import Theme from "../Screens/setting/theme/Theme";
import Message from "../Screens/setting/message/Message";
import Notification from "../Screens/setting/notification/Notification";
import Privacy from "../Screens/setting/privacy/Privacy";
import Birthday from "../Screens/setting/privacy/Birthday";
import AccountSecurity from "../Screens/setting/accountsecurity/AccountSecurity";
import ChangePhone from "../Screens/setting/accountsecurity/ChangePhone";
import ChangePhone1 from "../Screens/setting/accountsecurity/ChangePhone1";
import ChangePassword from "../Screens/setting/accountsecurity/ChangePassword";
import Login from "../Screens/login/Login";
import Signup from "../Screens/login/Signup";
import Forgotpw from "../Screens/login/Forgotpw"
import FriendRequest from "../Screens/contacts/friendrequest/FriendRequest"
import AuthenOTP from "../Screens/otp/AuthenOTP";
import Welcome from "../Screens/login/Welcome";
import Chat from "../Screens/chat/Chat"
import Options from "../Screens/chat/Option";
import Forward from "../Screens/chat/Forward";
import { COLORS } from '../constrants/theme'
import CreateGroup from "../Screens/contacts/group/CreateGroup";
import ViewMember from "../Screens/chat/ViewMember";
import AddMember from "../Screens/contacts/group/AddMember";
import OptionsGroup from "../Screens/chat/OptionGroup";

import ChatGroup from "../Screens/chat/ChatGroup";
import Call from "../Screens/chat/Call";
import MyQR from "../Screens/contacts/qr/MyQR";
import ScanQR from "../Screens/contacts/qr/ScanQR";

import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const TabNavigator = () => {
    const { t } = useTranslation('navigation');

    return (
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
            <Tab.Screen name={t('phone book')} component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                {focused ? (
                                    <>
                                        <FontAwesome name="circle" size={8} color={COLORS.black} />
                                    </>
                                ) : (
                                    <Feather name="users" size={24} color={COLORS.black} />
                                )}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen name={t('messages')} component={Messages}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                {focused ? (
                                    <>
                                        <FontAwesome name="circle" size={8} color={COLORS.black} />
                                    </>
                                ) : (
                                    <Ionicons name="chatbubble-outline" size={24} color={COLORS.black} />
                                )}
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen name={t('more')} component={Setting}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                {focused ? (
                                    <>
                                        <FontAwesome name="circle" size={8} color={COLORS.black} />
                                    </>
                                ) : (
                                    <Feather name="more-horizontal" size={24} color={COLORS.black} />
                                )}
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    );
};

const AppNavigation = () => (
    <NotificationProvider>
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
                <Stack.Screen name="ChatBox" component={Chat} options={{ headerShown: false }} />
                <Stack.Screen name="Option" component={Options} options={{ headerShown: false }} />
                <Stack.Screen name="OptionGroup" component={OptionsGroup} options={{ headerShown: false }} />
                <Stack.Screen name="Forward" component={Forward} options={{ headerShown: false }} />
                <Stack.Screen name="CreateGroup" component={CreateGroup} options={{ headerShown: false }} />
                <Stack.Screen name="ViewMember" component={ViewMember} options={{ headerShown: false }} />
                <Stack.Screen name="AddMember" component={AddMember} options={{ headerShown: false }} />
                <Stack.Screen name="ChatGroup" component={ChatGroup} options={{ headerShown: false }} />
                <Stack.Screen name="Call" component={Call} options={{ headerShown: false }} />
                <Stack.Screen name="MyQR" component={MyQR} options={{ headerShown: false }} />
                <Stack.Screen name="ScanQR" component={ScanQR} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    </NotificationProvider>
);

export default AppNavigation
