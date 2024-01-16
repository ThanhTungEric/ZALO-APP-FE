import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons ,Ionicons , Feather, SimpleLineIcons, MaterialIcons, FontAwesome     } from '@expo/vector-icons'; 
import React, { useState } from "react";
const Birthday = ({ navigation }) => {
    const [Toggle, setToggle] = useState(true);
    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };
    return(
        <View style={styles.container}>
            <View style={{width:'100%', height:50,backgroundColor:"#18A0FB",flexDirection:'row',alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{fontWeight:'600',color:'white',left:20,fontSize:18}}>Sinh nhật</Text>
            </View> 
            <View 
            style={{
            width:'100%', 
            height:'auto',
            backgroundColor:"#fff",
            }}>
                <View style={{height:30}}>
                    <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Hiện ngày sinh</Text>
                </View>
                <Pressable
                    
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    //justifyContent:'center'
                }}>
                    
                    <View style={{width:'90%',left:10}}>
                        
                        <View style={{height:20}}>
                            <Text style={{fontSize:16,fontWeight:'600'}}>Không hiện</Text>
                        </View>
                    </View>
                    </Pressable>

                    <Pressable
                    
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    //justifyContent:'center'
                }}>
                    
                    <View style={{width:'90%',left:10}}>
                        
                        <View style={{height:20}}>
                            <Text style={{fontSize:16,fontWeight:'600'}}>Hiện đầy đủ ngày, tháng, năm</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable
                    
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    //justifyContent:'center'
                }}>
                    
                    <View style={{width:'90%',left:10}}>
                        
                        <View style={{height:20}}>
                            <Text style={{fontSize:16,fontWeight:'600'}}>Chỉ hiện ngày tháng</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
            <View
            style={{
            width:'100%',
            height:'auto',
            backgroundColor:"#fff",
            marginTop:10
            }}>
                <View style={{height:30}}>
                    <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Thông báo</Text>
                </View>
                <View
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
          }}>
                <View style={{width:'80%',left:10}}>
                    
                    <View style={{height:20}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>Báo cho bạn bè về sinh nhật cảu bạn</Text>
                    </View>
                </View>
                <View style={{width:'auto'}}>
                <TouchableOpacity
                    style={[styles.toggleBtn, Toggle ? styles.activeBtn : null]}
                    onPress={() => toggleButton(setToggle)}
                >
                    <View style={[styles.circle, Toggle ? styles.activeCircle : null]} />
                </TouchableOpacity>
                </View>
                </View>
                
                
            </View>
        </View>
    )
}
export default Birthday;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems:'center',
        
    },
    toggleBtn: {
        width: 40,
        height: 20,
        borderRadius: 20,
        backgroundColor: "#ccc",
        marginLeft: "auto",
        justifyContent: "center",
      },
      circle: {
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: "#fff",
        marginHorizontal: 2,
      },
      activeBtn: {
        backgroundColor: '#3388E7',
        color: '#fff',
      },
      activeCircle: {
        transform: [{ translateX: 16 }],
      },
});