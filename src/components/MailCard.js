import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-swipeable";
import { Ionicons } from "@expo/vector-icons";
export default function MailCard({ email }) {

  const rightButtons = [
    <TouchableOpacity style={styles.archive}>
      <Ionicons name="archive" size={30} color="black" />
    </TouchableOpacity>
  ];
  return (
    <View
    style={styles.container}>
    <Swipeable
      rightButtonWidth={100}
      leftContent={null}
      rightButtons={rightButtons}
      useNativeDriver={false}
    >
      <View style={styles.card}>
        <View style={styles.btn}>
          <Image
            style={styles.user_image}
            source={{
              uri: email.sender.profile_pic,
            }}
          />
        </View>
        <View style={styles.text_box}>
          <Text
            style={[
              styles.heding,
              email.read_status ? styles.read : styles.normal,
            ]}
          >
            {email.sender.name}
          </Text>
          <Text
            style={[
              styles.body,
              email.read_status ? styles.read : styles.normal,
            ]}
            numberOfLines={1}
          >
            {email.subject}
          </Text>
          <Text style={styles.message} numberOfLines={1}>
            If
            {email.message}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={[email.read_status ? styles.read : styles.normal]}>
            {email.time}
          </Text>
          <TouchableOpacity style={styles.star}>
            <Feather name="star" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </Swipeable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  card: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 35,
  },
  text_box: {
    flex: 1,
    paddingHorizontal: 10,
  },
  heding: {
    fontSize: 15,
  },
  read: {
    fontWeight: "300",
    color: "gray",
  },
  normal: {
    fontWeight: "bold",
    color: "black",
  },
  body: {
    fontWeight: "bold",
    fontSize: 12,
  },
  star: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  btn: {
    alignSelf: "flex-start",
  },
  user_image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  message: {
    color: "gray",
  },
  archive: {
    backgroundColor: "green",
    // width: '50%',
    height: '100%',
    paddingHorizontal:35,
    justifyContent:'center',
    alignContent:'center',
  },
});
