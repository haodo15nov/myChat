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

const Chatpage = () => {
  const nav = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isActionModalVisible, setActionModalVisible] = useState(false);

  const handleSearchIconPress = () => {
    setIsSearching(!isSearching);
  };

  const handleAddFriendPress = () => {
    setActionModalVisible(true);
  };

  const handleCreateChatPress = () => {
    setActionModalVisible(false);
  };

  const handleModalClose = () => {
    setActionModalVisible(false);
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

        <TouchableOpacity
          onPress={handleAddFriendPress}
          style={styles.addFriendButton}
        >
          <Image
            source={require("../assets/add.png")}
            style={styles.addFriendIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Modal để hiển thị lựa chọn chỗ này nè */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isActionModalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalcontent}>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={handleCreateChatPress}
            >
              <Text style={styles.modalOption}>Tạo cuộc trò chuyện mới</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={handleAddFriendPress}
            >
              <Text style={styles.modalOption}>Add Friend</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={handleModalClose}
            >
              <Text style={styles.modalOption}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ---------------menu bar------------- */}
      <View style={styles.menuView}>
        <TouchableOpacity style={styles.menubtn}>
          <Image
            style={styles.menuimg}
            source={require("../assets/chat.png")}
          />
          <Text style={styles.mtext}>Tin Nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate("friend")}
          style={styles.menubtn1}
        >
          <Image
            style={styles.menuimg1}
            source={require("../menuimg/fr.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nav.navigate("user")}
          style={styles.menubtn1}
        >
          <Image
            style={styles.menuimg1}
            source={require("../menuimg/user1.png")}
          />
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
  // header------------------------------
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
  // modal------

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalcontent: {
    backgroundColor: "gray",
    height: 220,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalOption: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  modalbtn: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    width: 250,
    backgroundColor: "#FF99CC",
    margin: 5,
  },
  //
  // menubarr------------
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
  mtext1: {
    fontWeight: "bold",
    color: "#FF99CC",
  },
});

export default Chatpage;
