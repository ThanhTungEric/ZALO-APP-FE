import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS, FONTS } from '../../constrants/theme'
import { SafeAreaView } from 'react-native-safe-area-context';

import { getAllMemberByGroupId } from '../../router/APIRouter';

const ViewMember = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { group } = route.params; // Lấy thông tin group từ route params
    const groupId = group._id;

    const [members, setMembers] = useState([]);

    const getAllMembers = async () => {
        try {
            const response = await fetch(`${getAllMemberByGroupId}/${groupId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setMembers(data);
        } catch (error) {
            console.error("Error fetching group members:", error);
        }
    };
    console.log(groupId)
    useEffect(() => {
        getAllMembers();
    }, []);

    const handleAddMember = (group) => {
        navigation.navigate('AddMember', { group });
    };

    return (
        <SafeAreaView>
            {/* Header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 22, backgroundColor: COLORS.white, height: 60, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8 }}>Thành viên</Text>
                </View>
            </View>

            <View style={{ backgroundColor: '#fff' }}>
                <Pressable style={styles.header}
                     onPress={() => handleAddMember(group)}>
                    <View style={styles.viewHeader}>
                        <MaterialIcons name="group-add" size={24} color="white" />
                    </View>
                    <Text style={styles.textHeader}>Gợi ý thêm thành viên</Text>
                </Pressable>
            </View>

            <View style={{ backgroundColor: '#fff' }}>
                <Text style={{ ...FONTS.h4, marginTop: 20, marginLeft: 22, color: 'blue' }}>Thành viên</Text>
                <FlatList
                    data={members}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 22, borderBottomColor: COLORS.secondaryWhite, borderBottomWidth: 1, }}>
                            <View style={{ paddingVertical: 15, marginRight: 22, }}>
                                <Image
                                    source={{ uri: item.avatar }}
                                    resizeMode="contain"
                                    style={{ height: 50, width: 50, borderRadius: 25, }}
                                />
                            </View>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                                    {item.fullName}
                                </Text>
                            </View>
                        </TouchableOpacity>

                    )}
                />
            </View>

        </SafeAreaView>
    );
};

export default ViewMember;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    viewHeader: {
        display: 'flex',
        width: 45,
        height: 45,
        backgroundColor: "#7E57C2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 22.5,
        left: 10,
    },
    textHeader: {
        left: 25
    },
});