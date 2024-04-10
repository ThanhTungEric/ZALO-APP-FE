<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import axios from 'axios';
import { register } from '../../router/APIRouter';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Signup = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');

    //hide icon pass
    const [hideIconPass, setHideIconPass] = useState(true);
    //hide pass
    const [hidePass, setHidePass] = useState(true);
    //form login/register
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const handleHidePass = () => {
        setHidePass(!hidePass);
        setPassword(password);
        setHideIconPass(!hideIconPass);
    }

    const handleSignup = async () => {
        try {
            const response = await axios.post(`${register}`, {
                fullName,
                phoneNumber,
                email,
                birthDate,
                password,
            });

            if (response.status === 201) {
                // Đăng ký thành công
                console.log('Đăng ký thành công', response.data);

                // Thực hiện các xử lý khác, ví dụ: chuyển hướng đến trang đăng nhập
                navigation.navigate('Login', { phoneNumber: phoneNumber });
            } else {
                // Xử lý đăng ký thất bại
                console.error('Đăng ký thất bại', response.data);
            }
        } catch (error) {
            // Xử lý lỗi kết nối hoặc lỗi từ server
            console.error('Đã xảy ra lỗi:', error.message);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFEA00', padding: 8, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 16 }}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/cota.png')} style={{ width: 200, height: 200, borderRadius: 100 }} />
                </View>
            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Họ và tên</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
                        placeholder='Nhập họ và tên'
                        onChangeText={(text) => setFullName(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Số điện thoại</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
                        placeholder='Nhập số điện thoại'
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Email</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12  }}
                        placeholder='Nhập email'
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Ngày sinh</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12  }}
                        placeholder='Nhập ngày sinh'
                        onChangeText={(text) => setBirthDate(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Mật Khẩu</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                        <TextInput
                            style={{ flex: 1, padding: 16, color: '#4B5563' }}
                            secureTextEntry={hidePass}
                            placeholder='Nhập mật khẩu'
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={handleHidePass} style={{ padding: 16, color: '#4B5563' }}>
                            <Image source={hidePass ? require('../../assets/hide.png') : require('../../assets/eye.png')} style={{ width: 20, height: 20, backgroundColor: 'grey' }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#FFEA00', borderRadius: 20, marginTop: 20 }}  onPress={handleSignup}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>




        // <View style={styles.container}>
        //      <View style={{ width: '100%', height: 50, backgroundColor: "#fff", flexDirection: 'row', alignItems: 'center' }}>
        //         <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
        //             <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
        //         </Pressable>
        //     </View>
        //     <TextInput
        //         placeholder='Họ và tên'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setFullName(text)}
        //     />

        //     <TextInput
        //         placeholder='Số điện thoại'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setPhoneNumber(text)}
        //     />

        //     <TextInput
        //         placeholder='Email'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setEmail(text)}
        //     />

        //     <TextInput
        //         placeholder='Ngày sinh'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setBirthDate(text)}
        //     />

        //     <TextInput
        //         placeholder='Mật khẩu'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         secureTextEntry={true}
        //         onChangeText={(text) => setPassword(text)}
        //     />
        //     <TouchableOpacity
        //         onPress={handleSignup}
        //         style={styles.button}>
        //         <Text style={styles.buttonText}>Đăng ký</Text>
        //     </TouchableOpacity>



        // </View>
    );
};

=======
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import axios from 'axios';
import { register } from '../../router/APIRouter';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const Signup = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');

    //hide icon pass
    const [hideIconPass, setHideIconPass] = useState(true);
    //hide pass
    const [hidePass, setHidePass] = useState(true);
    //form login/register
    const [isLoginFormVisible, setLoginFormVisible] = useState(true);

    const handleHidePass = () => {
        setHidePass(!hidePass);
        setPassword(password);
        setHideIconPass(!hideIconPass);
    }

    const handleSignup = async () => {
        try {
            const response = await axios.post(`${register}`, {
                fullName,
                phoneNumber,
                email,
                birthDate,
                password,
            });

            if (response.status === 201) {
                // Đăng ký thành công
                console.log('Đăng ký thành công', response.data);

                // Thực hiện các xử lý khác, ví dụ: chuyển hướng đến trang đăng nhập
                navigation.navigate('Login', { phoneNumber: phoneNumber });
            } else {
                // Xử lý đăng ký thất bại
                console.error('Đăng ký thất bại', response.data);
            }
        } catch (error) {
            // Xử lý lỗi kết nối hoặc lỗi từ server
            console.error('Đã xảy ra lỗi:', error.message);
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#7B71F9' }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: '#FFEA00', padding: 8, borderTopRightRadius: 20, borderBottomLeftRadius: 20, marginLeft: 16 }}>
                        <AntDesign name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Image source={require('../../assets/cota.png')} style={{ width: 200, height: 200, borderRadius: 100 }} />
                </View>
            </SafeAreaView>
            <View style={{ flex: 3, backgroundColor: 'white', paddingHorizontal: 8, paddingTop: 8, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ marginTop: 8 }}>
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Họ và tên</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
                        placeholder='Nhập họ và tên'
                        onChangeText={(text) => setFullName(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Số điện thoại</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12 }}
                        placeholder='Nhập số điện thoại'
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Email</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12  }}
                        placeholder='Nhập email'
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Ngày sinh</Text>
                    <TextInput
                        style={{ padding: 16, backgroundColor: '#E5E7EB', color: '#4B5563', borderRadius: 20, marginBottom: 12  }}
                        placeholder='Nhập ngày sinh'
                        onChangeText={(text) => setBirthDate(text)}
                    />
                    <Text style={{ color: '#4B5563', marginLeft: 16 }}>Mật Khẩu</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7EB', borderRadius: 20 }}>
                        <TextInput
                            style={{ flex: 1, padding: 16, color: '#4B5563' }}
                            secureTextEntry={hidePass}
                            placeholder='Nhập mật khẩu'
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity onPress={handleHidePass} style={{ padding: 16, color: '#4B5563' }}>
                            <Image source={hidePass ? require('../../assets/hide.png') : require('../../assets/eye.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ paddingVertical: 12, backgroundColor: '#FFEA00', borderRadius: 20, marginTop: 20 }}  onPress={handleSignup}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#4B5563' }}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto"/>
        </View>




        // <View style={styles.container}>
        //      <View style={{ width: '100%', height: 50, backgroundColor: "#fff", flexDirection: 'row', alignItems: 'center' }}>
        //         <Pressable style={{ width: 50, height: 50, left: 10, justifyContent: 'center', alignItems: 'center' }}>
        //             <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
        //         </Pressable>
        //     </View>
        //     <TextInput
        //         placeholder='Họ và tên'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setFullName(text)}
        //     />

        //     <TextInput
        //         placeholder='Số điện thoại'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setPhoneNumber(text)}
        //     />

        //     <TextInput
        //         placeholder='Email'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setEmail(text)}
        //     />

        //     <TextInput
        //         placeholder='Ngày sinh'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         onChangeText={(text) => setBirthDate(text)}
        //     />

        //     <TextInput
        //         placeholder='Mật khẩu'
        //         placeholderTextColor={'#574E92'}
        //         style={styles.input}
        //         secureTextEntry={true}
        //         onChangeText={(text) => setPassword(text)}
        //     />
        //     <TouchableOpacity
        //         onPress={handleSignup}
        //         style={styles.button}>
        //         <Text style={styles.buttonText}>Đăng ký</Text>
        //     </TouchableOpacity>



        // </View>
    );
};

>>>>>>> b22fb74c6eb6513ba9b45c65c60c800e9b3e4ed1
export default Signup;