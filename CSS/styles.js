import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8ECF4',
        flex: 1,
    },
    header: {
        paddingTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#574E92',
        height: 50,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchInput: {
        width: '75%',
        height: 40,
        color: 'white',
    },
    backButton: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        width: '75%',
        fontSize: 13,
    },
    imageDiscovery: {
        width: 360, 
        height: 200, 
        borderRadius: 10, 
        marginTop: 5
    },
    toggleBtn: {
        width: 50,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#ccc",
        justifyContent: "center",
        marginLeft: 50,
      },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: "#fff",
    },
    activeBtn: {
        backgroundColor: '#574E92',
    },
    activeCircle: {
        transform: [{ translateX: 22 }],
    },
});
