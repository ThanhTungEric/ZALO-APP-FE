// Import các modules và hooks cần thiết
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Image, FlatList } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const array = [
  { image: require('../assets/ava1.png'), name: 'Chí Thanh IUH' },
  { image: require('../assets/group1.png'), name: 'N3_NHÓM CÔNG NGHỆ MỚI' },
  { image: require('../assets/ava2.png'), name: 'Võ Sang' },
  { image: require('../assets/group2.png'), name: 'QLDA_N1_10Điểm' },
  { image: require('../assets/ava3.png'), name: 'Nguyễn Thanh Tùng' },
  { image: require('../assets/group3.png'), name: 'Tương tác người máy_nhóm 3' },
  { image: require('../assets/group4.png'), name: 'Nhóm 5_MHHDL' },
  { image: require('../assets/group5.png'), name: 'KTTKPM_1_3_T7_2023_2024' },
  { image: require('../assets/group6.png'), name: 'CNMOI_2023_SANGT7_4_6' },
];

export default function Messages() {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('ChatBox', { item }); // Truyền item qua params
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
          <FlatList
            numColumns={1}
            data={array}
            keyExtractor={(item, index) => index.toString()} // Key extractor
            renderItem={({ item }) =>
              <Pressable
                onPress={() => handlePress(item)} // Sử dụng hàm handlePress và truyền item qua
                style={{ alignItems: 'center', height: 70, flexDirection: 'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
                <Image source={item.image} resizeMode='contain' style={{ width: 60, height: 60, left: 10 }}></Image>
                <Text style={{ bottom: 10, left: 20 }}>{item.name}</Text>
              </Pressable>
            }
          >
          </FlatList>
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
