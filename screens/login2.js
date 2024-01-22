import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
  const nav = useNavigation();


  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.logo}>myChat</Text>
      </View>
      <Text style={styles.textIv}>UserName</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="gray"
        />
      </View>
      <Text style={styles.textIv}>Mật Khẩu</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Quên mật khảu ?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate("chatpage")} style={styles.loginBtn}>
        <Text style={styles.loginText}>
          Đăng Nhập
        </Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize: 12, color: "gray" }}>Bạn chưa có tài khoản ? </Text>
        <TouchableOpacity onPress={()=> nav.navigate('register2')}>
        <Text style={{fontSize:13,fontWeight:'bold',color:'#FF99CC'}}>Đăng ký</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#FF99CC",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ced4da",
    borderRadius: 10,
    height: 50,
    marginBottom: 15,
    justifyContent: "center",
    padding: 20,
  },
  textIv: {
    width: "70%",
    margin: 4,
    fontStyle:'italic',
    fontWeight: "700",
    fontSize:11,
    color:"gray"
  },
  inputText: {
    height: 50,
    color: "black",
    fontSize:15,
    fontWeight:'500',
  },
  forgot: {
    color: "#FF99CC",
    fontSize: 12,
    fontStyle: "italic",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#FF99CC",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "500",
  },
});

export default LoginScreen;
