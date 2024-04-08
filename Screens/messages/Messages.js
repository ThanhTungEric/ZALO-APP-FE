// Import các modules và hooks cần thiết
import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Image, FlatList } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFriendListRoute, host } from '../../router/APIRouter';
import { io } from "socket.io-client";

export default function Messages() {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const socket = useRef();

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


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && user._id) { // Check if user is not null and has id property
          const response = await fetch(`${getFriendListRoute}/${user._id}`);
          if (response.ok) {
            const data = await response.json();
            const friendInfos = data.map(item => item.friendInfo);
            setData(friendInfos);
            console.log('finus', data);
          } else {
            console.error('Get friend list failed');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit('add-user', user._id);
    }
  }, [user]);


  const handlePress = (item) => {
    navigation.navigate('ChatBox', { selectedChat: item, socket });
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#574E92', height: 40 }}>
        <AntDesign name="search1" size={22} color="white" />
        <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
          style={{ width: 260, height: 40, color: "white" }}
        />
        <MaterialCommunityIcons name="qrcode-scan" size={22} color="white" />
        <AntDesign name="plus" size={22} color="white" />
      </View>
      <ScrollView>
        <View style={{ height: 710, backgroundColor: '#fff' }}>
          <Pressable style={{ alignItems: 'center', height: 30, flexDirection: 'row' }}>
            <Text style={{ left: 10, color: 'black', fontSize: 16 }}>Tất cả</Text>
            <AntDesign name="filter" size={24} color="grey" style={{ left: 245 }} />
            <Text style={{ left: 250, color: 'grey', fontSize: 14 }}>Phân loại</Text>
          </Pressable>
          {data.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => handlePress(item)}
              style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4', }}
            >
              <Image  source={{ uri: item.avatar }} resizeMode='contain' style={{ width: 60, height: 60, left: 10 }} />
              <Text style={{ bottom: 10, left: 20 }}>{item.fullName}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8ECF4',
    height: 670,
  },
});
