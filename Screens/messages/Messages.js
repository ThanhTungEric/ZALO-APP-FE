import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageContainer from '../../Components/PageContainer';
import { COLORS, FONTS } from '../../constrants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFriendListRoute, host, getAllGroupByMemberId } from '../../router/APIRouter';
import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';

const Messages = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [groups, setGroups] = useState([]);
  const isFocused = useIsFocused();
  const socket = useRef();
  const { t } = useTranslation('chat');
  const [newMessage, setNewMessage] = useState(false);

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
  }, [user, isFocused]);

  useEffect(() => {
    if (user) {
      socket.current = io(host);
      socket.current.emit('add-user', user._id);

      socket.current.on('msg-recieve', () => {
        setNewMessage(true);
        Toast.show({
          type: 'success',
          text1: 'Bạn có tin nhắn mới',
          position: 'top',
          autoHide: true,
          topOffset: 50,
          visibilityTime: 5000,
        });
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (user && user._id) {
          const response = await fetch(`${getAllGroupByMemberId}/${user._id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setGroups(data);
        }
      } catch (error) {
        console.error('Error fetching group data:', error);
      }
    };
    fetchGroups();
  }, [user]);

  const handlePress = (item) => {
    navigation.navigate('ChatBox', { selectedChat: item, socket });
  };

  const handleNavigateToQR = () => {
    navigation.navigate('MyQR');
  };

  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.fullName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  return (
    <SafeAreaView>
      <PageContainer>
        <View>
          <View style={styles.headerContainer}>
            <Text style={FONTS.h4}>{t('message')}</Text>
            <View style={styles.iconsContainer}>
              <AntDesign name="qrcode" size={20} color={COLORS.secondaryBlack} onPress={handleNavigateToQR} />
              <MaterialCommunityIcons name="message-badge-outline" size={20} color={COLORS.secondaryBlack} style={styles.iconMargin} />
              <MaterialCommunityIcons name="playlist-check" size={20} color={COLORS.secondaryBlack} style={styles.iconMargin} />
            </View>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.addButton}>
            <AntDesign name="plus" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={({ item }) => (
              <View style={styles.friendItemContainer}>
                <TouchableOpacity style={styles.friendAvatarContainer}>
                  <Image source={{ uri: item.avatar }} resizeMode="contain" style={styles.friendAvatar} />
                </TouchableOpacity>
                <Text>{item.fullName.substring(0, 5)}...</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={24} color={COLORS.white} />
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearch(text)}
            value={search}
            placeholder={t('search with name')}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={{ height: '60%' }}>
          <View style={styles.sectionHeader}>
            <Text style={FONTS.h4}>{t('friend')}</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
            {filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item)}
                style={[
                  styles.listItem,
                  index % 2 !== 0 && { backgroundColor: COLORS.tertiaryWhite },
                ]}
              >
                <View style={styles.listItemAvatarContainer}>
                  <Image source={{ uri: item.avatar }} resizeMode="contain" style={styles.listItemAvatar} />
                </View>
                <View>
                  <Text style={FONTS.h4}>{item.fullName}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.sectionHeader}>
            <Text style={FONTS.h4}>{t('group')}</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
            {groups.map((group, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('ChatGroup', { group, socket })}
                style={[
                  styles.listItem,
                  index % 2 !== 0 && { backgroundColor: COLORS.tertiaryWhite },
                ]}
              >
                <View style={styles.listItemAvatarContainer}>
                  <Image source={{ uri: group.avatar }} resizeMode="contain" style={styles.listItemAvatar} />
                </View>
                <View>
                  <Text style={FONTS.h4}>{group.groupName}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </PageContainer>
      <Toast />
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    marginTop: 22,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 12,
  },
  searchContainer: {
    marginHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6edff',
    marginBottom: 4,
  },
  friendItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendAvatarContainer: {
    paddingVertical: 15,
    marginRight: 22,
  },
  friendAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#574E92',
    height: 48,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    marginHorizontal: 12,
    color: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 22,
    marginTop: 22,
  },
  scrollContainer: {
    paddingBottom: 100,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  listItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1,
  },
  listItemAvatarContainer: {
    paddingVertical: 15,
    marginRight: 22,
  },
  listItemAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
