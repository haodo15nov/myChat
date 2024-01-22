import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const nav = useNavigation();
  

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Đăng ký</Text>
      {/* =----------------------input form */}
      <View style={styles.inputView}>
        {/* usn 0 cách,0 icon,có hoa, có thường,0 kts  */}
        <TextInput
          style={styles.inputText}
          placeholder="Mail"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.flname}>
      <View style={styles.inputViewf}>
        <TextInput
          style={styles.inputText}
          placeholder="First name"
          placeholderTextColor="gray"

        />
      </View>
      <View style={styles.inputViewf}>
        <TextInput
          style={styles.inputText}
          placeholder="Last Name"
          placeholderTextColor="gray"

        />
      </View>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mail"
          placeholderTextColor="gray"

        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry
        />
      </View>
            {/* =----------------------input form */}
      <TouchableOpacity style={styles.resBtn}>
        <Text style={styles.loginText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width:'100%'
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#FF99CC",
    marginBottom: 40,
  },
  inputView: {
    width: "85%",
    backgroundColor: "#ced4da",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  flname:{
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-around',
    width:'90%'
  },
  inputViewf: {
    width: "45%",
    backgroundColor: "#ced4da",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "#003f5c",
    fontSize: 11,
  },
  resBtn: {
    width: "80%",
    backgroundColor: "#FF99CC",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default RegisterScreen;
