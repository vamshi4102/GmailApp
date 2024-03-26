import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import { Feather } from "@expo/vector-icons";
export default function MailSearchBar() {
    return (
      <View style={styles.search_email}>
        <TouchableOpacity style={styles.btn}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.search_box}>
          <TextInput
            placeholder="Search in emails"
            style={styles.input}
            placeholderTextColor={"#333"}
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Image
            style={styles.user_image}
            source={{
              uri: "https://st5.depositphotos.com/51587144/67258/v/450/depositphotos_672586204-stock-illustration-circle-avatar-portrait-women-various.jpg",
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    search_email: {
      backgroundColor: "#f3f3f3",
      width: "100%",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 35,
    },
    btn: {},
    search_box: {
      flex: 1,
      paddingHorizontal: 10,
    },
    input: {
      height: 40,
      fontSize: 16,
      color:'red'
    },
    user_image: {
      width: 40,
      height: 40,
      borderRadius: 40,
    },
  });