import { Image, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';

function Discovery() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-around', backgroundColor:'#574E92', height: 50}}>
        <AntDesign name="search1" size={22} color="white"/>
        <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
          style={{width: 260, height:40, color: "white"}}
        />
        <MaterialCommunityIcons name="qrcode-scan" size={22} color="white" />
      </View>
      <ScrollView>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Image source={require('../../assets/dis1.png')} style={{ width: 360, height: 200, borderRadius: 10, marginTop: 10}}/>
          <Image source={require('../../assets/dis2.png')} style={{ width: 360, height: 200, borderRadius: 10, marginTop: 10}}/>
          <Image source={require('../../assets/dis3.png')} style={{ width: 360, height: 150, borderRadius: 10, marginTop: 10}}/>
          <Image source={require('../../assets/dis4.png')} style={{ width: 360, height: 150, borderRadius: 10, marginTop: 10}}/>
          <Image source={require('../../assets/dis5.png')} style={{ width: 360, height: 150, borderRadius: 10, marginTop: 10}}/>
        </View>
      </ScrollView>
    </View>
  );
}
export default Discovery;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#E8ECF4',
    height: 670,
  },
});