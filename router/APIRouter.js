export const host = "http://192.168.1.6:8080";
export const login = `${host}/user/login`;
export const register = `${host}/user/`;
export const forgotPassword = `${host}/user/forgotPassword`;
export const changePassword = `${host}/user/changePassword`;


//friend
export const getFriendListRoute = `${host}/friend/get-friend`;

//chat
export const sendMessageRoute = `${host}/api/messages/addmsg`;
export const recieveMessageRoute = `${host}/api/messages/getmsg`;