import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons ,Ionicons , Feather, SimpleLineIcons, MaterialIcons, FontAwesome     } from '@expo/vector-icons'; 
import React, { useState } from "react";

const Notification = ({ navigation }) => {
    const [ToggleBaoTN2N, setToggleBaoTN2N] = useState(true);
    const [ToggleXemTN2N, setToggleXemTN2N] = useState(true);
    const [ToggleBaoTNN, setToggleBaoTNN] = useState(true);
    const [ToggleBaoCGD, setToggleBaoCGD] = useState(true);
    const [ToggleBaoSN, setToggleBaoSN] = useState(true);
    const [ToggleBaoTNMoi, setToggleBaoTNMoi] = useState(true);
    const [ToggleRung, setToggleRung] = useState(false);
    const [ToggleXemTNMoi, setToggleXemTNMoi] = useState(true);
    const toggleButton = (toggleFunction) => {
      toggleFunction((prevState) => !prevState);
    };

  return (
    <View style={styles.container}>
        <View style={{width:'100%', height:40, backgroundColor:"#574E92", flexDirection:'row', alignItems:'center'}}>
                <Pressable style={{width:50, height:50, left: 10, justifyContent:'center', alignItems:'center'}}>
                    <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
                </Pressable>
                <Text style={{color:'white',left:20,fontSize:18}}>Thông báo</Text>
        </View> 
            <ScrollView style={{width:'100%'}}>
            <View style={{width:'100%', height:'auto',backgroundColor:"#fff"}}>
            <View style={{height:30}}>
                <Text style={{color:'#2F62AB',fontWeight:'bold',left:'20px',marginTop:10}}>Trò chuyện 2 người</Text>
            </View>
            <View
                style={{height:60,
                width:'100%',
                borderBottomWidth:1,
                borderColor:'#D9D9D9',
                left:20,
                flexDirection:'row',
                alignItems:'center',
                
            }}>
                    <View style={{width:'80%',left:10}}>
                        <View style={{height:30}}>
                            <Text>Báo tin nhắn mới từ trò chuyện 2<br></br>người</Text>
                        </View>
                    </View>
                    <View style={{width:'auto'}}>
                    <TouchableOpacity
                        style={[styles.toggleBtn, ToggleBaoTN2N ? styles.activeBtn : null]}
                        onPress={() => toggleButton(setToggleBaoTN2N)}
                    >
                        <View style={[styles.circle, ToggleBaoTN2N ? styles.activeCircle : null]} />
                    </TouchableOpacity>
                    </View>
                </View>

                <View
                style={{height:60,
                width:'100%',
                borderBottomWidth:1,
                borderColor:'#D9D9D9',
                left:20,
                flexDirection:'row',
                alignItems:'center',
                
            }}>
                    <View style={{width:'80%',left:10}}>
                        <View style={{height:30}}>
                            <Text>Xem trước tin nhắn từ trò chuyện 2<br></br>người</Text>
                        </View>
                    </View>
                    <View style={{width:'auto'}}>
                    <TouchableOpacity
                        style={[styles.toggleBtn, ToggleXemTN2N ? styles.activeBtn : null]}
                        onPress={() => toggleButton(setToggleXemTN2N)}
                    >
                        <View style={[styles.circle, ToggleXemTN2N ? styles.activeCircle : null]} />
                    </TouchableOpacity>
                    </View>
                </View>
            </View> 
                <View style={{width:'100%', height:'auto',backgroundColor:"#fff", marginTop: 10}}>
                    <Text style={{color:'#2F62AB',fontWeight:'bold',left:'20px',marginTop:10}}>Trò chuyện nhóm</Text>
                    <View
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Báo tin nhắn mới từ nhóm</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, ToggleBaoTNN ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setToggleBaoTNN)}
                        >
                            <View style={[styles.circle, ToggleBaoTNN ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{width:'100%', height:'auto',backgroundColor:"#fff", marginTop: 10}}>
                    <Text style={{color:'#2F62AB',fontWeight:'bold',left:'20px',marginTop:10}}>Cuộc gọi</Text>
                    <View
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Báo cuộc gọi đến</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, ToggleBaoCGD ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setToggleBaoCGD)}
                        >
                            <View style={[styles.circle, ToggleBaoCGD ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                        </View>
                    </View>

                    <Pressable
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Tắt thông báo cuộc gọi từ bạn bè</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <AntDesign name="right" size={18} color="#7A7E86" style={{left: 10}}/>
                        </View>
                    </Pressable>
                </View>

                
            </View>

            <View style={{width:'100%', height:'auto',backgroundColor:"#fff", marginTop: 10}}>
                    <Text style={{color:'#2F62AB',fontWeight:'bold',left:'20px',marginTop:10}}>Sự kiện</Text>
                    <View
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Báo cho tôi về sinh nhật của bạn bè</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, ToggleBaoSN ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setToggleBaoSN)}
                        >
                            <View style={[styles.circle, ToggleBaoSN ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{width:'100%', height:'auto',backgroundColor:"#fff", marginTop: 10}}>
                    <Text style={{color:'#2F62AB',fontWeight:'bold',left:'20px',marginTop:10}}>Thông báo</Text>
                    <View
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Phát âm báo khi có tin nhắn mới</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, ToggleBaoTNMoi ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setToggleBaoTNMoi)}
                        >
                            <View style={[styles.circle, ToggleBaoTNMoi ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Rung khi có tin nhắn mới</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, ToggleRung ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setToggleRung)}
                        >
                            <View style={[styles.circle, ToggleRung ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View
                    style={{height:60,
                    width:'100%',
                    borderBottomWidth:1,
                    borderColor:'#D9D9D9',
                    left:20,
                    flexDirection:'row',
                    alignItems:'center',
                    }}>
                        <View style={{width:'80%',left:10}}>
                            <View style={{height:20}}>
                                <Text>Xem trước tin nhắn mới</Text>
                            </View>
                        </View>
                        <View style={{width:'auto'}}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, ToggleXemTNMoi ? styles.activeBtn : null]}
                            onPress={() => toggleButton(setToggleXemTNMoi)}
                        >
                            <View style={[styles.circle, ToggleXemTNMoi ? styles.activeCircle : null]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
};
export default Notification;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
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