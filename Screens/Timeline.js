import { ImageBackground, StyleSheet, View, TextInput } from 'react-native';
import { AntDesign, SimpleLineIcons, FontAwesome5  } from '@expo/vector-icons';
export default function Discovery() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 40}}>
        <AntDesign name="search1" size={22} color="white"/>
        <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
          style={{width: 260, height:40, color: "white"}}
        />
        <SimpleLineIcons name="note" size={22} color="white" />
        <FontAwesome5 name="bell" size={22} color="white"/>
      </View>
      <ImageBackground source={require('../assets/timeline.png')} style={styles.image}> </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8ECF4',
    height: 670,
  },
  image: {
    width: 390,
    height: 630,
    resizeMode: 'contain',
  },
  
});