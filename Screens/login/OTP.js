import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, SimpleLineIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'

const OTP = ({ navigation, route }) => {
    return(
        <View style={styles.container}>
            <PhoneInput
  country={'vn'}
  onChange={phone => this.setState({ phone })}
/>
        </View>
    )
}
export default OTP;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
    },
});