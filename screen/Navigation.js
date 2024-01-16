import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaiKhoanBaoMat from "./TaiKhoanBaoMat";
import DoiMK from "./DoiMK";
import DoiSDT from "./DoiSDT";
import DoiSDT1 from "./DoiSDT1";
import Setting from "./Setting";
import QuyenRiengTu from "./QuyenRiengTu/QuyenRiengTu";
import SinhNhat from "./QuyenRiengTu/SinhNhat";
import ThongBao from "./ThongBao/ThongBao";
import TinNhan from "./TinNhan/TinNhan";
import CuocGoi from "./CuocGoi/CuocGoi";

const Stack = createNativeStackNavigator();
const Navigation = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setting">
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ headerShown: false }}>
        </Stack.Screen>
        <Stack.Screen
          name="TaiKhoanBaoMat"
          component={TaiKhoanBaoMat}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DoiMK"
          component={DoiMK}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DoiSDT"
          component={DoiSDT}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DoiSDT1"
          component={DoiSDT1}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="QuyenRiengTu"
          component={QuyenRiengTu}
          options={{ headerShown: false }}>
        </Stack.Screen>
        <Stack.Screen
          name="SinhNhat"
          component={SinhNhat}
          options={{ headerShown: false }}>
        </Stack.Screen>
        <Stack.Screen
          name="ThongBao"
          component={ThongBao}
          options={{ headerShown: false }}>
        </Stack.Screen>

        <Stack.Screen
          name="TinNhan"
          component={TinNhan}
          options={{ headerShown: false }}
        >
        </Stack.Screen>
        <Stack.Screen
          name="CuocGoi"
          component={CuocGoi}
          options={{ headerShown: false }}
        ></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default Navigation;
