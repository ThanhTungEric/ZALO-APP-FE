import React, { useState, useRef} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
export default function AuthenOTP() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");
    const [confirm, setConfirm] = useState(null);
    const phoneInput = useRef(null);
    const [formattedValue, setFormattedValue] = useState("");
    const navigation = useNavigation();

    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log("Error sending code:", error);
        }
    };

    const confirmCode = async () => {
        try {
            const userCredential = await confirm.confirm(code);
            const user = userCredential.user;

            // check if the user is new or existing
            const userDocument = await firestore()
                .collection("users")
                .doc(user.uid)
                .get();
            if (userDocument.exists) {
                // User is existing, navigate to Home
                navigation.navigate("Home");
            } else {
                // User is new, navigate to Signup
                navigation.navigate("Signup", { uid: user.uid });
            }
        } catch (error) {
            console.log("Invalid code", error);
        }
    };

    return (
        <View style={{ flex: 1, padding: 10, backgroundColor: "#BEBD88" }} >
            <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 40, marginTop: 100 }}> Phone Number Authetication Using Firebase</Text>
            {!confirm ? (
                <>
                    <Text style={{ marginBottom: 20, fontSize: 18, }}>Enter your phone number:</Text>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode="VN"
                        layout="first"
                        onChangeText={(text) => {
                            setPhoneNumber(text)
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme
                        withShadow
                        autoFocus
                    />
                    <TouchableOpacity
                        onPress={signInWithPhoneNumber}
                        style={{
                            backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: 'center'
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>Send Code</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text style={{ marginBottom: 20, fontSize: 18 }}>Enter the code sent to your phone:</Text>
                    <TextInput style={{ height: 50, width: "100%", borderColor: "black", borderWidth: 1, marginBottom: 30, paddingHorizontal: 10, }}
                        placeholder="Enter code"
                        value={code}
                        onChangeText={setCode} />
                    <TouchableOpacity
                        onPress={confirmCode}
                        style={{ backgroundColor: "#841584", padding: 10, borderRadius: 5, marginBottom: 20, alignItems: "center" }}
                    >
                        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>Confirm Code</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}
