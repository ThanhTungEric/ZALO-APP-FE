export const host = "http://192.168.1.9:8080";
export const login = `${host}/user/login`;
export const register = `${host}/user/`;
export const forgotPassword = `${host}/user/forgotPassword`;
export const changePassword = `${host}/user/changePassword`;


//friend
export const getFriendListRoute = `${host}/friend/get-friend`;
export const getAddFriendRoute = `${host}/friend/add-friend`;
export const getGetAddFriendRoute = `${host}/friend/get-add-friend`;
export const getRejectFriend = `${host}/friend/reject-friend`;
export const getAcceptFriendRoute = `${host}/friend/accept-friend`;
export const getUnFriendRoute = `${host}/friend/unfriend-friend`;
export const getFriendByNumberPhoneRoute = `${host}/user/phoneNumber`;

//group
export const getCreateGroup = `${host}/api/group/create-group`;
export const getAllGroup = `${host}/api/group/all`;
export const getAllGroupByMemberId = `${host}/api/group/member`;
export const getAllMemberByGroupId = `${host}/api/group/get-member`;
export const getGroupById = `${host}/api/group/id`;
export const getLeaveGroup = `${host}/api/group/leave-group`;
export const getDeleteGroup = `${host}/api/group/delete-group`;
export const getAddMember = `${host}/api/group/add-member`;
export const getRemoveMemberFromGroup = `${host}/api/group/remove-member`;
export const getSetDeputyForGroup = `${host}/api/group/set-deputy`;
export const getRemoveDeputyFromGroup = `${host}/api/group/remove-deputy`;// này chưa làm
export const getChangeAdminOfGroup = `${host}/api/group/change-admin`;

export const getMessagesGroup = `${host}/api/groupMessage/get-messages`
export const sendMessageGroup = `${host}/api/groupMessage/send-message`
export const getGroupMemberRoute = `${host}/api/group/get-member`
export const deleteMessageGroupRoute = `${host}/api/groupMessage/delete-message`
export const recallMessageGroupRoute = `${host}/api/groupMessage/recall-message`

//chat
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const deleteMessageRoute = `${host}/api/messages/deletemsg`;
export const recallMessageRoute = `${host}/api/messages/recallmsg`;
//upload file
export const uploadImageRoute = `${host}/api/upload/file`;

// //group
// export const findAllgroupRoute = `${host}/group/member`;



