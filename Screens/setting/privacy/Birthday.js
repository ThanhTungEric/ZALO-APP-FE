import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Birthday = ({ navigation }) => {
    const [Toggle, setToggle] = useState(true);
    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
    };
    return(
        <View style={styles.container}>
            <View style={{width:'100%', height:50,backgroundColor:"#574E92",flexDirection:'row',alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{color:'white',left:20,fontSize:18}}>Sinh nhật</Text>
            </View> 
            <View 
            style={{
            width:'100%', 
            height:'auto',
            backgroundColor:"#fff",
            }}>
                <View style={{height:30}}>
                    <Text style={{color:'#2F62AB',fontWeight:'bold',left: 20,marginTop:10}}>Hiện ngày sinh</Text>
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
                            <Text>Không hiện</Text>
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
                            <Text>Hiện đầy đủ ngày, tháng, năm</Text>
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
                            <Text>Chỉ hiện ngày tháng</Text>
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
                    <Text style={{color:'#2F62AB',fontWeight:'bold',left: 20,marginTop:10}}>Thông báo</Text>
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
                        <Text>Báo cho bạn bè về sinh nhật cảu bạn</Text>
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
        marginTop: 20,
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems:'center',
        
    },
    toggleBtn: {
        width: 50,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#ccc",
        marginLeft: "auto",
        justifyContent: "center",
      },
      circle: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#fff",
      },
      activeBtn: {
        backgroundColor: '#574E92',
        color: '#fff',
      },
      activeCircle: {
        transform: [{ translateX: 22 }],
      },
});