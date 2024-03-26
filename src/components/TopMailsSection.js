import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function TopMailsSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.top_text}>Primary</Text>
      <View style={styles.card}>
        <View style={styles.btn}>
          <Feather name="users" size={24} color="blue" />
        </View>
        <View style={styles.text_box}>
          <Text style={styles.heding}>Socials</Text>
          <Text style={styles.body}>Abiram texts</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.number_text}>3 New</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.btn}>
          <AntDesign name="tago" size={24} color="green" />
        </View>
        <View style={styles.text_box}>
          <Text style={styles.heding}>Socials</Text>
          <Text style={styles.body}>LinkedIn jobs alerts,Vamshi4102 Live</Text>
        </View>
        <View style={[styles.number, styles.green]}>
          <Text style={styles.number_text}>15 New</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  top_text:{
    marginVertical:15
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
  //   text box
  text_box: {
    flex: 1,
    paddingHorizontal: 10,
  },
  heding: {
    fontWeight: "bold",
    fontSize: 15,
  },
  body: {
    fontWeight: "bold",
    fontSize: 12,
  },
  number: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "lightblue",
    borderRadius: 20,
  },
  green: {
    backgroundColor: "lightgreen",
  },
  number_text:{
    fontSize:11
  }
});
