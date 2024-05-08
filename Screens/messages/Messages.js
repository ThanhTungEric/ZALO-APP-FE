import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList, } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

import PageContainer from '../../Components/PageContainer'
import { COLORS, FONTS } from '../../constrants/theme'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFriendListRoute, host, getAllGroupByMemberId } from '../../router/APIRouter'; // Combine API imports
import { io } from "socket.io-client";


const Messages = () => {

  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  const [groups, setGroups] = useState([]);


  // Lưu trạng thái của thông báo đã xóa người bạn
  const isFocused = useIsFocused();


  const socket = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('userData');
        if (value !== null) {
          const parsUser = JSON.parse(value);
          setUser(parsUser);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        if (user && user._id) {
          const response = await fetch(`${getFriendListRoute}/${user._id}`);
          if (response.ok) {
            const data = await response.json();
            const friendInfos = data.map(item => item.friendInfo);
            setData(friendInfos);
          } else {
            console.error('Get friend list failed');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchFriendList();
  }, [user,isFocused]);


  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit('add-user', user._id);
    }
  }, [user]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (user && user._id) {
          const response = await fetch(`${getAllGroupByMemberId}/${user._id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setGroups(data);
        }
      } catch (error) {
        console.error("Error fetching group data:", error);
      }
    };
    fetchGroups();
  }, [user]);

  const handlePress = (item) => {
    navigation.navigate('ChatBox', { selectedChat: item, socket });
  };

  // Search
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.fullName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  return (
    <SafeAreaView>
      <PageContainer>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 22, marginTop: 22 }}>
          <Text style={{ ...FONTS.h4 }}>Tin nhắn </Text>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="message-badge-outline" size={20} color={COLORS.secondaryBlack} />
            <MaterialCommunityIcons name="playlist-check" size={20} color={COLORS.secondaryBlack} style={{ marginLeft: 12 }} />
          </View>
        </View>
        <View style={{ marginHorizontal: 22, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 4 }}>
            <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e6edff', marginBottom: 4 }}>
              <AntDesign name="plus" size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={data}
              horizontal={true}
              renderItem={({ item, index }) => (
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <TouchableOpacity style={{ paddingVertical: 15, marginRight: 22 }}>
                    <Image source={{ uri: item.avatar }} resizeMode="contain" style={{ height: 50, width: 50, borderRadius: 25 }} />
                  </TouchableOpacity>
                  <Text>{item.fullName.substring(0, 5)}...</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View style={{
          marginHorizontal: 22,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#574E92',
          height: 48,
          marginVertical: 22,
          paddingHorizontal: 12,
          borderRadius: 20,
        }}>
          <Ionicons name="search-outline" size={24} color={COLORS.white} />
          <TextInput style={{ width: '100%', height: '100%', marginHorizontal: 12, color: '#fff' }}
            onChangeText={(text) => setSearch(text)}
            value={search}
            placeholder="Tìm kiếm tên..."
            placeholderTextColor={'#fff'}
          />
        </View>
        <View style={{ height: '60%' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 22, marginTop: 22 }}>
            <Text style={{ ...FONTS.h4 }}>Danh sách bạn bè </Text>
          </View>
          <ScrollView style={{ paddingBottom: 100, backgroundColor: '#fff', marginTop: 10, height: '20%' }}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item)}
                style={[
                  {
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    borderBottomColor: COLORS.secondaryWhite,
                    borderBottomWidth: 1,
                  },
                  index % 2 !== 0
                    ? {
                      backgroundColor: COLORS.tertiaryWhite,
                    }
                    : null,
                ]}
              >
                <View style={{ paddingVertical: 15, marginRight: 22 }}>
                  {/* {item.status === 'online' && (
                    <View style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: COLORS.green, borderColor: COLORS.white, borderWidth: 2, position: 'absolute', top: 14, right: 2, zIndex: 1000 }} />
                  )} */}
                  <Image
                    source={{ uri: item.avatar }}
                    resizeMode="contain"
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                    {item.fullName}
                  </Text>
                  {/* <Text style={{ fontSize: 14, color: COLORS.secondaryGray }}>
                    {item.status}
                  </Text> */}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>



          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 22, marginTop: 22 }}>
            <Text style={{ ...FONTS.h4 }}>Nhóm </Text>
          </View>
          {/* Render danh sách nhóm */}
          <ScrollView style={{ height: '20%' }}>
            {groups.map((group, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('ChatGroup', { group, socket })}
                style={[
                  { width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, borderBottomColor: COLORS.secondaryWhite, borderBottomWidth: 1, },
                  index % 2 !== 0 ? { backgroundColor: COLORS.tertiaryWhite } : null,
                ]}
              >
                <View style={{ paddingVertical: 15, marginRight: 22, }}>
                  <Image source={{ uri: group.avatar }} resizeMode="contain" style={{ height: 50, width: 50, borderRadius: 25, }} />
                </View>
                <View style={{ flexDirection: 'column', }}>
                  <Text style={{ ...FONTS.h4, marginBottom: 4 }}>{group.groupName}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </PageContainer>
    </SafeAreaView>
  )
}

export default Messages;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  viewHeader: {
    display: 'flex',
    width: 45,
    height: 45,
    backgroundColor: "#7E57C2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22.5,
    left: 10,
  },
  textHeader: {
    left: 25
  },
});
