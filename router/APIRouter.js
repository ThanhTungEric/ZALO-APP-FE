export const host = "http://192.168.1.20:8080";
export const login = `${host}/user/login`;
export const register = `${host}/user/`;
export const forgotPassword = `${host}/user/forgotPassword`;
export const changePassword = `${host}/user/changePassword`;

//chat
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;
export const getFriendByNumberPhoneRoute = `${host}/user/phoneNumber`;

//friend
export const getFriendListRoute = `${host}/friend/get-friend`;
export const getAddFriendRoute = `${host}/friend/add-friend`;
export const getGetAddFriendRoute = `${host}/friend/get-add-friend`;
export const getRejectFriend =  `${host}/friend/reject-friend`;
export const getAcceptFriendRoute = `${host}/friend/accept-friend`;
export const getUnFriendRoute = `${host}/friend/unfriend-friend`;
