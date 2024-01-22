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
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchIconPress = () => {
    setIsSearching(!isSearching);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* -------header------- */}
      <View style={styles.searchBarContainer}>
        {isSearching ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Nhập từ khóa tìm kiếm"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            focusable={false}
          />
        ) : null}
        <TouchableOpacity onPress={handleSearchIconPress}>
          {isSearching ? (
            <Image
              source={require("../assets/close.png")}
              style={styles.searchIcon}
            />
          ) : (
            <Image
              source={require("../assets/search.png")}
              style={styles.searchIcon}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.addFriendButton}>
          <Image
            source={require("../assets/settings.png")}
            style={styles.addFriendIcon}
          />
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------Body---------------------------------------------------- */}
      <View style={styles.body}>
        <TouchableOpacity>
          <Image style={styles.avt} source={require("../menuimg/user1.png")} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>nav.navigate('inf')}
        style={styles.option}>
            <Text style={styles.optiontext}>Thông Tin Cá Chép</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
            <Text style={styles.optiontext}>update Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
            <Text style={styles.optiontext}>update Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
            <Text style={styles.optiontext}>update Soon</Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------Body---------------------------------------------------- */}

      {/* ---------------menu bar------------- */}
      <View style={styles.menuView}>
        <TouchableOpacity
          onPress={() => nav.goBack("chatpage")}
          style={styles.menubtn1}
        >
          <Image
            style={styles.menuimg1}
            source={require("../menuimg/chat1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.goBack("friend")}
          style={styles.menubtn1}
        >
          <Image style={styles.menuimg} source={require("../menuimg/fr.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menubtn}>
          <Image
            style={styles.menuimg}
            source={require("../menuimg/user.png")}
          />
          <Text style={styles.mtext}>Cá Nhân</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  // ------------------------------------header------------------------------------------------------------------
  searchBarContainer: {
    flex: 1,
    position: "absolute",
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF99CC",
    padding: 20,
    paddingTop: 55,
  },
  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginLeft: 10,
  },
  addFriendButton: {
    marginLeft: "auto",
  },
  addFriendIcon: {
    width: 25,
    height: 25,
  },
  //------------------------------------body------------------------------------
  body: {
    width: "100%",
    marginTop: 50,
    alignContent:'center',
    alignItems:'center'
  },
  avt: {
    margin: 20,
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
  option:{
    width:"100%",
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderBottomWidth:0.5,
    borderTopWidth:0.5,
    margin:2,
  },

  //------------------------------------ menubarr------------------------------------------------
  menuView: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: 90,
    marginTop: "195%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.4,
    borderColor: "gray",
  },
  menubtn: {
    height: 65,
    width: 100,
    borderColor: "#FF99CC",
    backgroundColor: "#FF99CC",
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  menuimg: {
    resizeMode: "contain",
    height: 35,
    width: 35,
    margin: 5,
  },
  mtext: {
    fontWeight: "bold",
    color: "white",
  },
  menubtn1: {
    height: 65,
    width: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  menuimg1: {
    resizeMode: "contain",
    height: 35,
    width: 35,
  },
});

export default User;
