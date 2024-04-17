export const host = "http://192.168.137.9:8080";
export const login = `${host}/user/login`;
export const register = `${host}/user/`;
export const forgotPassword = `${host}/user/forgotPassword`;
export const changePassword = `${host}/user/changePassword`;


//friend
export const getFriendListRoute = `${host}/friend/get-friend`;
export const getAddFriendRoute = `${host}/friend/add-friend`;
export const getGetAddFriendRoute = `${host}/friend/get-add-friend`;
export const getRejectFriend =  `${host}/friend/reject-friend`;
export const getAcceptFriendRoute = `${host}/friend/accept-friend`;
export const getUnFriendRoute = `${host}/friend/unfriend-friend`;
export const getFriendByNumberPhoneRoute = `${host}/user/phoneNumber`;

//group
export const getCreateGroup = `${host}/api/group/create-group`;
export const getAllGroup = `${host}/api/group/all`
export const getMessagesGroup = `${host}/api/groupMessage/get-messages`
export const sendMessageGroup = `${host}/api/groupMessage/send-message`
export const getGroupMemberRoute = `${host}/api/group/get-member`
export const deleteMessageGroupRoute = `${host}/api/groupMessage/delete-message`

//chat
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const deleteMessageRoute = `${host}/api/messages/deletemsg`;
export const recallMessageRoute = `${host}/api/messages/recallmsg`;
//upload file
export const uploadImageRoute = `${host}/api/upload/file`;

// //group
// export const findAllgroupRoute = `${host}/group/member`;



