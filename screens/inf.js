import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const User = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
     <Text>Chỗ này là chiếu thông tin nè hih ^^</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#fff",
    justifyContent:'center',
    alignContent:'center',
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
 
});

export default User;
