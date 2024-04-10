import { Image, StyleSheet, View, TextInput, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../../CSS/styles'
function Discovery() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="search1" size={22} color="white"  style={styles.searchIcon}/>
        <TextInput placeholder="Tìm kiếm" placeholderTextColor={'#D9D9D9'}
          style={styles.searchInput}
        />
        <MaterialCommunityIcons name="qrcode-scan" size={22} color="white" />
      </View>
      <ScrollView>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Image source={require('../../assets/dis1.png')} style={styles.imageDiscovery}/>
          <Image source={require('../../assets/dis2.png')} style={styles.imageDiscovery}/>
          <Image source={require('../../assets/dis3.png')} style={styles.imageDiscovery}/>
          <Image source={require('../../assets/dis4.png')} style={styles.imageDiscovery}/>
          <Image source={require('../../assets/dis5.png')} style={styles.imageDiscovery}/>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
export default Discovery;
