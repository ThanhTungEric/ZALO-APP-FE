import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons ,Ionicons , Feather, SimpleLineIcons, MaterialIcons, FontAwesome     } from '@expo/vector-icons'; 
import React, { useState } from "react";
const QuyenRiengTu = ({navigation}) => {
    const [Toggle, setToggle] = useState(true);
    const [ToggleDX, setToggleDX] = useState(true);
    const [ToggleKB, setToggleKB] = useState(false);
    const toggleButton = (toggleFunction) => {
        toggleFunction((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <View style={{width:'100%', height:50,backgroundColor:"#18A0FB",flexDirection:'row',alignItems:'center'}}>
            <Pressable style={{width:50, height:50, left: 10,justifyContent:'center',alignItems:'center'}}>
                <AntDesign name="arrowleft" size={24} color="white" onPress={() => navigation.goBack()}/>
            </Pressable>
            <Text style={{fontWeight:'600',color:'white',left:20,fontSize:18}}>Quyền riêng tư</Text>
        </View>
        <ScrollView style={{height:'auto',width:'100%'}}>
        <View style={{width:'100%', height:'auto',backgroundColor:"#fff"}}>
            <View style={{height:30}}>
                <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Cá nhân</Text>
            </View>
            <Pressable
            onPress={() => navigation.navigate('SinhNhat')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
          }}>
            <AntDesign name="calendar" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Sinh nhật</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>

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
                <MaterialCommunityIcons name="account-eye-outline" size={24} color="black" />
                <View style={{width:'70%',left:10}}>
                    
                    <View style={{height:20}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>Hiện trạng thái truy cập</Text>
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
        <View style={{width:'100%', height:'auto',backgroundColor:"#fff",marginTop:10}}>
            <View style={{height:30}}>
                <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Tin nhắn và cuộc gọi</Text>
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
                <AntDesign name="message1" size={24} color="black" />
                <View style={{width:'70%',left:10}}>
                    
                    <View style={{height:20}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>Hiện trạng thái "Đã xem"</Text>
                    </View>
                </View>
                <View style={{width:'auto'}}>
                <TouchableOpacity
                    style={[styles.toggleBtn, ToggleDX ? styles.activeBtn : null]}
                    onPress={() => toggleButton(setToggleDX)}
                >
                    <View style={[styles.circle, ToggleDX ? styles.activeCircle : null]} />
                </TouchableOpacity>
                </View>
            
          </View>


          <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
            }}>
            <Feather name="message-circle" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Cho phép nhắn tin</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
          }}>
            <Ionicons name="call-outline" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Cho phép gọi điện</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>
        </View>

        <View style={{width:'100%', height:'auto',backgroundColor:"#fff",marginTop:10}}>
            <View style={{height:30}}>
                <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Nhật kỹ</Text>
            </View>
            <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
          }}>
            <SimpleLineIcons name="note" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Cho phép xem và bình luận</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>
        </View>

        <View style={{width:'100%', height:'auto',backgroundColor:"#fff",marginTop:10}}>
        <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            marginTop:10,
            //justifyContent:'center'
          }}>
            <MaterialIcons name="block" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Chặn và ẩn</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>
          </View>

            <View style={{width:'100%', height:'auto',backgroundColor:"#fff",marginTop:10}}>
                <View style={{height:30}}>
                    <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Nguồn tìm kiếm và kết bạn</Text>
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
                <FontAwesome name="address-book-o" size={24} color="black" />
                <View style={{width:'70%',left:10}}>
                    
                    <View style={{height:20}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>Tự động kết bạn từ danh bạ máy</Text>
                    </View>
                </View>
                <View style={{width:'auto'}}>
                <TouchableOpacity
                    style={[styles.toggleBtn, ToggleKB ? styles.activeBtn : null]}
                    onPress={() => toggleButton(setToggleKB)}
                >
                    <View style={[styles.circle, ToggleKB ? styles.activeCircle : null]} />
                </TouchableOpacity>
                </View>
            </View>

            <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
            }}>
            <MaterialCommunityIcons name="account-sync-outline" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Quản lý nguồn tìm kiếm và kết bạn</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>
        </View>

        <View style={{width:'100%', height:'auto',backgroundColor:"#fff",marginTop:10}}>
            <View style={{height:30}}>
                <Text style={{color:'blue',fontWeight:'bold',left:'20px',marginTop:10}}>Quyền của tiện ích và ứng dụng</Text>
            </View>
            <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
            }}>
            <AntDesign name="qrcode" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Tiện ích</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>


          <Pressable
            onPress={() => navigation.navigate('DoiMK')} 
            style={{height:60,
            width:'100%',
            borderBottomWidth:1,
            borderColor:'#D9D9D9',
            left:20,
            flexDirection:'row',
            alignItems:'center',
            //justifyContent:'center'
            }}>
            <AntDesign name="appstore-o" size={24} color="black" />
            <View style={{width:'80%',left:10}}>
                
                <View style={{height:20}}>
                    <Text style={{fontSize:16,fontWeight:'600'}}>Ứng dụng</Text>
                </View>
            </View>
            <View 
            style={{width:40,height:40,right:20,justifyContent:'center',alignItems:'center'}}><AntDesign name="right" size={20} color="black" /></View>
          </Pressable>
        </View>
        </ScrollView>

    </View>
  );
};
export default QuyenRiengTu;
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