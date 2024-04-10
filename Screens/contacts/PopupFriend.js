import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { getAddFriendRoute } from '../../router/APIRouter';
import { FONTS } from '../../constrants/theme'


const PopupFriend = ({ userData, userId, closePopup }) => {

    const userId1 = userData._id;
    const userId2 = userId._id;

    console.log("--", userData);
    console.log(userId);
    
    const handleSendAddFriend = async ({ userId1, userId2 }) => {
        try {
            const response = await fetch(`${getAddFriendRoute}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idUser1: userId1,
                    idUser2: userId2,
                }),

            });
            Alert.alert('Gởi lời mời kết bạn thành công');
            if (!response.ok) {
                throw new Error('Failed to reject friend.');
            }

            const data = await response.json();
        } catch (error) {
            console.error('Error rejecting friend:', error);
        }
        window.location.reload();
    };
    return (
        <View>
            <View>
                <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginTop: 10}}>
                    <View style={{ paddingVertical: 15, marginRight: 22, }}>
                        <Image
                            source={{ uri: userId.avatar }}
                            resizeMode="contain"
                            style={{ height: 50, width: 50, borderRadius: 25, }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                            Tên: {userId.fullName}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', }}>
                        <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                            Số điện thoại: {userId.phoneNumber}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => handleSendAddFriend({ userId1: userId1, userId2: userId2 })}
                            style={styles.button}
                        >
                            <Text>Kết bạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={closePopup}
                            style={[styles.button, { marginLeft: 10 }]}
                        >
                            <Text style={{ color: 'purple' }}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default PopupFriend;

const styles = {
    button: {
        width: 130,
        height: 35,
        backgroundColor: "#EAECF0",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    }
};
