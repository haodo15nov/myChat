import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function App() {
  const nav = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //kiểm tra mk và comfrim
  const handleRegister = () => {
    // Biểu thức chính quy để kiểm tra mật khẩu
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;

    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Thông báo",
        "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt"
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Thông báo", "Mật khẩu nhập lại không khớp");
      return;
    }
    // Chuyển page
    // ...

    Alert.alert("Thông báo", "Đăng ký thành công");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* ------------------------- Header -------------------------  */}
      <View>
        <Text style={{ fontSize: "40", fontWeight: "bold" }}>Đăng ký</Text>
      </View>
      {/* ------------------------- Header -------------------------  */}

      {/* ------------------------- Form -------------------------  */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="  Nhập số điện thoại"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="  Nhập mật khẩu"
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          placeholder="  Nhập lại mật khẩu"
        ></TextInput>
        <View style={styles.otp}>
          <TextInput style={styles.inputOTP} placeholder="  OTP"></TextInput>
          <TouchableOpacity style={styles.btnOTP}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Gửi OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ------------------------- Form -------------------------  */}

      {/* ------------------------- BTN -------------------------  */}
      <View>
        <TouchableOpacity onPress={handleRegister} style={styles.btnDK}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
            Đăng Ký
          </Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------- BTN -------------------------  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    height: "40%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#027FF7",
    margin: 10,
    width: "85%",
    height: 40,
    borderRadius: 15,
    textAlign: "center",
  },
  otp: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    alignContent: "center",
  },
  inputOTP: {
    borderWidth: 1,
    borderColor: "#027FF7",
    margin: 10,
    width: "20%",
    height: 40,
    borderRadius: 15,
  },
  btnOTP: {
    borderRadius: 5,
    height: 40,
    width: 80,
    backgroundColor: "#027FF7",
    justifyContent: "center",
  },
  btnDK: {
    borderRadius: 5,
    height: 60,
    width: 190,
    backgroundColor: "#027FF7",
    justifyContent: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
