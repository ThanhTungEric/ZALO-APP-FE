import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Pressable,  Image, FlatList, SectionList } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome, Ionicons   } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const DATA = [
  {
    title: 'C',
    data: [
      { image: require('../assets/ava1.png'), name: 'Chí Thanh IUH' },
    ],
  },
  {
    title: 'L',
    data: [
      { image: require('../assets/dog.png'), name: 'Lê Quang Trung' },
    ],
  },
  {
    title: 'N',
    data: [
      { image: require('../assets/ava3.png'), name: 'Nguyễn Thanh Tùng' },
    ],
  },
  {
    title: 'V',
    data: [
      { image: require('../assets/ava2.png'), name: 'Võ Hoàng Minh Sang' },
    ],
  },
];

function FriendScreen() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: 180, backgroundColor: '#fff'}}>
            <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
              <View style={{display: 'flex', width: 45, height: 45, backgroundColor: "#7E57C2", alignItems: "center", justifyContent: "center", borderRadius: '50%', left: 10}}>
                <MaterialIcons name="group" size={24} color="white" />
              </View>
              <Text style={{left: 25 }}>Lời mời kết bạn</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
              <View style={{display: 'flex', width: 45, height: 45, backgroundColor: "#7E57C2", alignItems: "center", justifyContent: "center", borderRadius: '50%', left: 10}}>
                <AntDesign name="contacts" size={24} color= "white" />
              </View>
              <Text style={{left: 25 }}>Danh bạ máy</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 60, flexDirection:'row'}}>
              <View style={{display: 'flex', width: 45, height: 45, backgroundColor: "#7E57C2", alignItems: "center", justifyContent: "center", borderRadius: '50%', left: 10, }}>
                <FontAwesome name="birthday-cake" size={24} color="white" />
              </View>
              <Text style={{left: 25 }}>Lịch sinh nhật</Text>
            </Pressable>
          </View>
          <View style={{ height: 500, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E8ECF4', marginTop: 10}}>
            <SectionList
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({item}) => (
                <Pressable style={{alignItems: 'center', height: 50, flexDirection:'row'}}>    
                  <Image source={item.image} resizeMode='contain' style={{width: 40, height: 40, left: 10}}></Image>
                  <Text style={{left: 20,}}>{item.name}</Text>
                  <View  style={{marginLeft: 'auto', flexDirection: 'row'}}>
                    <Ionicons name="call-outline" size={24} color="grey" />
                    <Feather name="video" size={24} color="grey" />
                  </View>
                </Pressable>   
              )}
              renderSectionHeader={({section: {title}}) => (
                <Text style={{fontSize: 18}}>{title}</Text>
              )}
              
            />
          </View>
        </ScrollView>
      </View>    
    );
  }
  


  const array = [
    {image: require('../assets/group1.png'), name: 'N3_NHÓM CÔNG NGHỆ MỚI'},
    {image: require('../assets/group2.png'), name: 'QLDA_N1_10Điểm'},
    {image: require('../assets/group3.png'), name: 'Tương tác người máy_nhóm 3'},
    {image: require('../assets/group4.png'), name: 'Nhóm 5_MHHDL'},
    {image: require('../assets/group5.png'), name: 'KTTKPM_1_3_T7_2023_2024'},
    {image: require('../assets/group6.png'), name: 'CNMOI_2023_SANGT7_4_6'},
  ]
  
  function GroupScreen() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: 70, backgroundColor: '#fff'}}>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
              <View style={{display: 'flex', width: 40, height: 40, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: '50%', left:15}}>
                <AntDesign name="addusergroup" size={24} color="#2F62AB" />
              </View>
              <Text style={{left: 30, color: '#2F62AB'  }}>Tạo nhóm mới</Text>
            </Pressable>
          </View>
          <View style={{ height: 100, backgroundColor: '#fff', marginTop: 10}}>
            <Pressable style={{ alignItems: 'center', height: 20, flexDirection:'row'}}>
              <Text style={{left: 20, color: 'black', fontSize: 16}}>Tạo nhóm với:</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 80, flexDirection:'row', justifyContent: 'space-around', alignItems: 'center'}}>
              <View style={{alignItems: 'center'}}>
                <View style={{display: 'flex', width: 50, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: '50%'}}>
                  <Image source={require('../assets/calendar.png')} style={{ width: 50, height: 50, borderRadius: '50%'}}/>
                </View>
                <Text style={{color: 'grey'}}>Lịch</Text>
              </View>  
              <View style={{alignItems: 'center'}}>
                <View style={{display: 'flex', width: 50, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: '50%'}}>
                  <Image source={require('../assets/clock.png')} style={{ width: 50, height: 50, borderRadius: '50%'}}/>
                </View>
                <Text style={{color: 'grey'}}>Nhắc hẹn</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{display: 'flex', width: 50, height: 50, backgroundColor: "#EAECF0", alignItems: "center", justifyContent: "center", borderRadius: '50%'}}>
                  <Image source={require('../assets/group.png')} style={{ width: 50, height: 50, borderRadius: '50%'}}/>
                </View>
                <Text style={{color: 'grey'}}>Nhóm offline</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ height: 600, backgroundColor: '#fff', marginTop: 10}}>
            <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
              <Text style={{left: 20, color: 'black', fontSize: 16}}>Nhóm đang tham gia</Text>
            </Pressable>
           
              <FlatList
                numColumns={1}
                data={array}
                renderItem={({item}) =>
                  <Pressable style={{alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4',}}>    
                    <Image source={item.image} resizeMode='contain' style={{width: 60, height: 60, left: 10}}></Image>
                    <Text style={{bottom: 10, left: 20}}>{item.name}</Text>
                  </Pressable>    
                }
              >
              </FlatList>   
            
          </View>
        </ScrollView>
      </View>    
    );
  }

  function QAScreen() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ height: 70, backgroundColor: '#fff'}}>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4'}}>
              <Image source={require('../assets/music.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/>
              <Text style={{left: 30 }}>Tìm thêm Official Account</Text>
            </Pressable>
          </View>
          <View style={{ height: 450, backgroundColor: '#fff', marginTop: 10}}>
            <Pressable style={{ alignItems: 'center', height: 30, flexDirection:'row'}}>
              <Text style={{left: 20, color: 'black', fontSize: 16}}>Official Account đang quan tâm</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row'}}>
              <Image source={require('../assets/newspaper.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/>
              <Text style={{left: 30}}>Báo mới</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
              <Image source={require('../assets/cloud.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/>        
              <Text style={{left: 30}}>Thời tiết</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
              <Image source={require('../assets/zalopay.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/> 
              <Text style={{left: 30}}>ZaloPay</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
              <Image source={require('../assets/zalo.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/> 
              <Text style={{left: 30}}>Zalo Hỗ Trợ IOS</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
              <Image source={require('../assets/zalosticker.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/>
              <Text style={{left: 30}}>Zalo Sticker</Text>
            </Pressable>
            <Pressable style={{ alignItems: 'center', height: 70, flexDirection:'row', borderWidth: 1, borderColor: '#E8ECF4', }}>
              <Image source={require('../assets/zingmp3.png')} style={{ width: 45, height: 45, borderRadius: '50%', left: 15 }}/> 
              <Text style={{left: 30}}>Zing MP3</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>    
    );
  }
  

function Contacts() {
    

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 40}}>
              <AntDesign name="search1" size={22} color="white"/>
              <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
                style={{width: 260, height:40, color: "white"}}
              />
              <Feather name="user-plus" size={22} color="white" />
            </View>
            <Tab.Navigator initialRouteName="Bạn bè"
                screenOptions={{
                    tabBarLabelStyle: { textTransform: 'none' },
                    tabBarActiveTintColor: '#574E92', 
                    tabBarInactiveTintColor: 'grey',
                  }}
            >
                <Tab.Screen name="Bạn bè" component={FriendScreen}/>
                <Tab.Screen name="Nhóm" component={GroupScreen}/>
                <Tab.Screen name="QA" component={QAScreen}/>
            </Tab.Navigator>
        </View>
        
      );
}
export default Contacts

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E8ECF4',
      height: 670,
  },
});