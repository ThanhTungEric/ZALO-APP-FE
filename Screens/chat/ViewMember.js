import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, FlatList, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS, FONTS } from '../../constrants/theme'
import { SafeAreaView } from 'react-native-safe-area-context';

import { getAllMemberByGroupId, getRemoveMemberFromGroup, getSetDeputyForGroup, getGroupById, getRemoveDeputyFromGroup } from '../../router/APIRouter';

const ViewMember = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { group, userData } = route.params;; // Lấy thông tin group và userData từ route params
    const groupId = group._id;

    const [members, setMembers] = useState([]);

    const [selectedMember, setSelectedMember] = useState(null); // Trạng thái cho việc hiển thị modal
    const [modalVisible, setModalVisible] = useState(false); // Trạng thái để kiểm soát việc hiển thị modal
    const [confirmModalVisible, setConfirmModalVisible] = useState(false); // hiện modal của bổ nhiệm nhóm phó

    // Xem danh sách thành viên nhóm
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
    console.log("groupId:", groupId)
    useEffect(() => {
        getAllMembers();
    }, []);

    const handleAddMember = (group) => {
        navigation.navigate('AddMember', { group }); 
    };

    /// MODAL của nhóm trưởng
    const handleMemberPress = (member) => {
        // Kiểm tra nếu id của thành viên không phải là id của nhóm trưởng
        if (member._id !== group.groupAdmin) {
            setSelectedMember(member);
            setModalVisible(true);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    /// MODAL

    // xóa thành viên khỏi nhóm
    const removeMemberFromGroup = async (groupId, memberId) => {
        try {
            const response = await fetch(getRemoveMemberFromGroup, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    groupId: groupId,
                    memberId: memberId,
                }),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data.message);
            getAllMembers();
        } catch (error) {
            console.error("Error removing member:", error);
        }
    };

    // console.log("đây là user nhóm trưởng", userData._id)

    // bổ nhiệm làm phó nhóm
    const setDeputyForGroup = async (groupId, deputyId, adminId) => {
        try {
            const response = await fetch(getSetDeputyForGroup, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    groupId: groupId,
                    deputyId: deputyId,
                    adminId: adminId
                }),
            });
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            getAllMembers();
        } catch (error) {
            console.error("Error setting deputy:", error);
        }
    };


    const handleSetDeputy = () => {
        if (selectedMember) {
            setConfirmModalVisible(true); // Hiển thị modal xác nhận
        }
    };

    // Hàm để xác nhận việc bổ nhiệm làm phó nhóm
    const confirmSetDeputy = () => {
        setDeputyForGroup(groupId, selectedMember._id, userData._id);
        closeModal(); // Đóng modal
        setConfirmModalVisible(false); // Ẩn modal xác nhận
    };

    // Hàm để hủy bỏ bổ nhiệm làm phó nhóm 
    const cancelSetDeputy = () => {
        setConfirmModalVisible(false); // Ẩn modal xác nhận
    };
    // cái rename group cũng vậy (chưa cần đến này để cuối kì báo cáo làm)
    // // xóa phó nhóm khỏi nhóm (chưa cần đến này để cuối kì báo cáo làm)
    // const removeDeputyFromGroup = async (groupId, memberId, adminId) => {
    //     try {
    //         const response = await fetch(getRemoveDeputyFromGroup, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 groupId: groupId,
    //                 memberId: memberId,
    //                 adminId: adminId
    //             }),
    //         });
    //         if (!response.ok) {
    //             throw new Error("Network response was not ok");
    //         }
    //         const data = await response.json();
    //         console.log(data);
    //         getAllMembers(); // Sau khi loại bỏ phó nhóm, cập nhật lại danh sách thành viên
    //     } catch (error) {
    //         console.error("Error removing deputy:", error);
    //     }
    // };


    // get group by id
    useEffect(() => {
        const fetchGroupData = async () => {
            try {
                const response = await fetch(`${getGroupById}/${groupId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Group Data:', data); // 
            } catch (error) {
                console.error('Error fetching group data:', error);
            }
        };

        fetchGroupData(); // Call the function to fetch group data
    }, []);

    console.log("đây là", group.groupDeputy)
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
                    renderItem={({ item }) => {
                        // Kiểm tra xem item có trong danh sách phó nhóm hay không
                        const isDeputy = group.groupDeputy.includes(item._id);
                        // Kiểm tra xem item có phải là nhóm trưởng hay không
                        const isAdmin = item._id === group.groupAdmin;

                        return (
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 22,
                                    borderBottomColor: COLORS.secondaryWhite,
                                    borderBottomWidth: 1,
                                }}
                                onPress={() => handleMemberPress(item)}
                            >
                                <View style={{ paddingVertical: 15, marginRight: 22 }}>
                                    <Image
                                        source={{ uri: item.avatar }}
                                        resizeMode="contain"
                                        style={{ height: 50, width: 50, borderRadius: 25 }}
                                    />
                                </View>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                                        {item.fullName}
                                    </Text>
                                    {/* Hiển thị vai trò của thành viên */}
                                    {isDeputy && <Text style={{ color: 'grey' }}>Phó nhóm</Text>}
                                    {isAdmin && <Text style={{ color: 'green' }}>Trưởng nhóm</Text>}
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />

                {/* Modal */}
                <Modal visible={modalVisible} transparent animationType="fade">
                    <View style={styles.modalContainer}>
                        {/* Nội dung của modal */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, paddingTop: 20, }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginHorizontal: 22, borderBottomColor: COLORS.secondaryWhite, borderBottomWidth: 1 }}>
                                <Text style={{ ...FONTS.h4, marginVertical: 6 }}>Thông tin thành viên</Text>
                            </View>
                            <View style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <Text onPress={closeModal} style={{ ...FONTS.h4, marginVertical: 6, color: '#574E92' }}>X</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ paddingVertical: 15, marginRight: 22, }}>
                                {selectedMember && (
                                    <Image
                                        source={{ uri: selectedMember.avatar }}
                                        resizeMode="contain"
                                        style={{ height: 50, width: 50, borderRadius: 25 }}
                                    />
                                )}
                            </View>
                            <View style={{ flexDirection: 'column', }}>
                                <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                                    {selectedMember ? selectedMember.fullName : ''}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.verticalOptionsContainer}>
                            {/* Hiển thị lựa chọn "Xem trang cá nhân" cho mọi vai trò*/}
                            <TouchableOpacity style={styles.option2}>
                                <Text style={styles.optionText}>Xem trang cá nhân</Text>
                            </TouchableOpacity>
                            {/* Hiển thị các lựa chọn cho trưởng nhóm */}
                            {userData._id === group.groupAdmin && (
                                <>
                                    <TouchableOpacity style={styles.option2} onPress={handleSetDeputy}>
                                        <Text style={styles.optionText}>Bổ nhiệm làm phó nhóm</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option2}>
                                        <Text style={styles.optionText}>Chuyển quyền trưởng nhóm </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.option2} onPress={() => {
                                        // removeDeputyFromGroup(group._id, selectedMember._id, userData._id);
                                        removeMemberFromGroup(group._id, selectedMember._id);
                                    }}>
                                        <Text style={{ marginLeft: 10, color: 'red' }}>Xóa khỏi nhóm</Text>
                                    </TouchableOpacity>
                                </> 
                            )}
                            {group.groupDeputy.includes(userData._id) && (
                                <TouchableOpacity style={styles.option2} onPress={() => {
                                    removeMemberFromGroup(group._id, selectedMember._id);
                                }}>
                                    <Text style={{ marginLeft: 10, color: 'red' }}>Xóa khỏi nhóm</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </Modal>
                {/* Modal của bổ nhiệm phó nhóm */}
                <Modal visible={confirmModalVisible} transparent animationType="fade">
                    <View style={styles.modalDeputyContainer}>
                        <Text style={{ ...FONTS.h4, marginBottom: 20 }}>Bổ nhiệm {selectedMember ? selectedMember.fullName : ''} làm phó nhóm?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={[styles.option2, { marginLeft: 10 }]} onPress={cancelSetDeputy}>
                                <Text style={styles.optionText}>Hủy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.option2, { marginRight: 10 }]} onPress={confirmSetDeputy}>
                                <Text style={[styles.optionText, { color: 'blue' }]}>Bổ nhiệm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    modalContainer: {
        marginTop: "auto",
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    modalDeputyContainer: {
        marginLeft: '20%',
        marginTop: "90%",
        width: 500,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    verticalOptionsContainer: {
        marginTop: 20,
    },
    option2: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    optionText: {
        marginLeft: 10,
        color: '#574E92',
    },
});