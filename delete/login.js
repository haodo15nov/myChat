import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import chat from "../assets/chat.png";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
export default function App() {
  const nav = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Biểu thức kiểm tra mật khẩu
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;

    if (passwordRegex.test(password)) {
      // Mật khẩu hợp lệ, bạn có thể thực hiện đăng nhập hoặc thực hiện các hành động khác 
      nav.navigate("chatpage")
    } else {
      // Mật khẩu không hợp lệ
      Alert.alert(
        "Thông báo",
        "Mật khẩu phải chứa ít nhất một chữ hoa, một số và một ký tự đặc biệt"
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ------------------------- Header -------------------------  */}
      <View style={styles.header}>
        {/* -----Text----- */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            color: "white",
            marginRight: 20,
          }}
        >
          myCHAT
        </Text>
        {/* -----Image----- */}
        <Image
          source={chat}
          resizeMode="contain"
          style={{ height: 80, width: 80 }}
        />
      </View>
      {/* ------------------------- Header -------------------------  */}

      {/* ------------------------- Body -------------------------  */}
      <View style={styles.body}>
        <Text
          style={{
            margin: 20,
            fontSize: 45,
            fontWeight: "700",
            fontStyle: "italic",
            color: "#027FF7",
          }}
        >
          @ - Login
        </Text>
        {/* -----Username n Password */}
        <View style={{ margin: 20 }}>
          <View style={styles.input}>
            <Text style={styles.itext}>USERNAME:</Text>
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.textinput}
            ></TextInput>
          </View>
          {/* --- */}
          <View style={styles.input}>
            <Text style={styles.itext}>PASSWORDL:</Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.textinput}
            ></TextInput>
          </View>
        </View>
        {/* -----Button----- */}
        <View style={styles.btnfrom}>
          <TouchableOpacity
                    onPress={handleLogin}
            style={styles.log}
          >
            <Text style={styles.btntext}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => nav.navigate("register")}
            style={styles.res}
          >
            <Text style={styles.btntext}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        {/* -----Register----- */}
      </View>
      {/* ------------------------- Body -------------------------  */}

      {/* ------------------------- End -------------------------  */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  // header
  header: {
    height: "40%",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#027FF7",
    flexDirection: "row",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  // body
  body: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    alignContent: "center",
  },
  input: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itext: {
    fontWeight: "bold",
    margin: 10,
    fontSize: 15,
    color: "#027FF7",
  },
  textinput: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: "#027FF7",
    margin: 10,
    fontSize: 15,
  },
  //button
  btnfrom: {
    alignItems: "center",
  },
  btntext: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  log: {
    justifyContent: "center",
    alignItems: "center",
    magin: 10,
    width: 200,
    height: 60,
    backgroundColor: "#027FF7",
    borderRadius: 40,
  },
  res: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    width: 170,
    height: 60,
    backgroundColor: "#027FF7",
    borderRadius: 40,
  },
});
