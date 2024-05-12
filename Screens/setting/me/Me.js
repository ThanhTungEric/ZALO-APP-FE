import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Pressable, ImageBackground, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../../constrants/theme';
import { useTranslation } from 'react-i18next';

const Me = ({ navigation }) => {
  const [user, setUser] = useState('');
  const { t } = useTranslation('setting');

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        const parsUser = JSON.parse(value);
        setUser(parsUser);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  const date = new Date(user.birthDate);
  const birthDateFormatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  console.log(birthDateFormatted);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground style={{ height: 300, paddingTop: 25 }} source={{ uri: user.avatar }} >
          <AntDesign name="arrowleft" size={25} color={COLORS.black} onPress={() => navigation.goBack()} style={styles.searchIcon} />
          <View style={styles.header}>
            <Image style={styles.avatar} source={{ uri: user.avatar }} />
            <Text style={styles.name}>{user.fullName}</Text>
          </View>
        </ImageBackground>
        <View style={{ backgroundColor: '#fff' }}>
          <Text style={{ fontWeight: 'bold', left: '3%' }}>Thông tin cá nhân</Text>
          <View style={{ alignItems: 'center', height: 70, flexDirection: 'row' }}>
            <Text style={{ left: '35%' }}> {t('gender')} </Text>
            <Text style={styles.value}>Nam</Text>
          </View>
          <View style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4' }}>
            <Text style={{ left: '35%' }}> {t('birthday')} </Text>
            <Text style={styles.value}>{birthDateFormatted}</Text>
          </View>
          <View style={{ alignItems: 'center', height: 70, flexDirection: 'row' }}>
            <Text style={{ left: '35%' }}> {t('phone number')} </Text>
            <Text style={styles.value}>{user.phoneNumber}</Text>
          </View>
          <Pressable style={{ alignItems: 'center', justifyContent: 'center', height: 80, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', display: "flex", width: 350, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
              <AntDesign name="edit" size={24} color="black" />
              <Text style={{ fontWeight: 'bold', left: 10 }}> {t('edit')} </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8ECF4',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 'auto'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  value: {
    marginLeft: "15%",
    fontSize: 18,
    color: 'grey'
  },
  editButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Me;
