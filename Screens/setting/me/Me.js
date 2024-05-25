import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Pressable, ImageBackground, SafeAreaView, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../../constrants/theme';
import { useTranslation } from 'react-i18next';
import { updateInfoRoute, uploadImageRoute } from '../../../router/APIRouter';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const Me = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { t } = useTranslation('setting');

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('userData');
      if (value !== null) {
        const parsedUser = JSON.parse(value);
        setUser(parsedUser);
        setFullName(parsedUser.fullName);
        setPhoneNumber(parsedUser.phoneNumber);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUserInfo = async (imageUrl) => {
    try {
      const response = await fetch(`${updateInfoRoute}/${phoneNumber}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, avatar: imageUrl  }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user info');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUser));
      setIsEditing(false);
      Alert.alert('Success', 'User information updated successfully');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
      uploadImage();
    }
  };
  //api get only uri of image
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      let fileType = 'image/jpeg';

      if (image.endsWith('.png')) {
        fileType = 'image/png';
      }
      formData.append('file', {
        uri: image,
        type: fileType,
        name: 'image.' + (fileType === 'image/jpeg' ? 'jpg' : 'png'),
      });

      const response = await axios.post(uploadImageRoute, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('file uploaded', response.data);
      const imageUrl = response.data;
      setImageUrl(imageUrl);
      await updateUserInfo(imageUrl);
      setImageUrl('');
      setImage(null);
    } catch (error) {
      console.log('error upload image', error);
    }
  };

  const date = new Date(user.birthDate);
  const birthDateFormatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground style={{ height: 300, paddingTop: 25 }} source={{ uri: user.avatar }}>
          <AntDesign name="arrowleft" size={25} color={COLORS.black} onPress={() => navigation.goBack()} style={styles.searchIcon} />
          <View style={styles.header}>
            <Image style={styles.avatar} source={{ uri: user.avatar }} />
            <Pressable style={{ position: 'absolute', right: 10, bottom: 10, backgroundColor: COLORS.primary, borderRadius: 20, padding: 5, }} onPress={pickImage}>
              <AntDesign name="camera" size={24} color="white" />
            </Pressable>
          </View>
        </ImageBackground>
        <View style={{ backgroundColor: '#fff' }}>
          <View style={styles.infoRow}>
            <Text style={{ left: '35%', fontSize: 20 }}>{t('information')}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={{ left: '35%' }}>{t('gender')}:</Text>
            <Text style={styles.value}>Nam</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={{ left: '35%' }}>{t('name')}:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={setFullName}
              />
            ) : (
              <Text style={styles.value}>{user.fullName}</Text>
            )}
          </View>
          <View style={styles.infoRow}>
            <Text style={{ left: '35%' }}>{t('birthday')}:</Text>
            <Text style={styles.value}>{birthDateFormatted}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={{ left: '35%' }}>{t('phonenumber')}:</Text>
            <Text style={styles.value}>{user.phoneNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={{ left: '35%' }}>{t('email')}:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          {isEditing ? (
            <Pressable style={styles.saveButton} onPress={updateUserInfo}>
              <Text style={styles.saveButtonText}>{t('save')}</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.editButton} onPress={() => setIsEditing(true)}>
              <View style={{ flexDirection: 'row', display: "flex", width: 350, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                <AntDesign name="edit" size={24} color="black" />
                <Text style={{ fontWeight: 'bold', left: 10 }}>{t('edit')}</Text>
              </View>
            </Pressable>
          )}
          {/* {image && (
            <Pressable style={styles.uploadButton} onPress={uploadImage}>
              <Text style={styles.uploadButtonText}>{t('save')}</Text>
            </Pressable>
          )} */}
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
    marginTop: 'auto',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  value: {
    left: '60%',
    fontSize: 18,
    color: 'grey',
  },
  input: {
    left: '60%',
    fontSize: 18,
    color: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flex: 1,
  },
  infoRow: {
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flexDirection: 'row',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    flexDirection: 'row',
    backgroundColor: "#EAECF0",
    borderRadius: 30,
    marginHorizontal: 20,
  },
  saveButtonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
});

export default Me;
