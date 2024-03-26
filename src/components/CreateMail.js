import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CreateMail = () => {
  return (
    <View style={styles.btn}>
      <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
      <Text style={styles.text}>Compose</Text>
    </View>
  );
};

export default CreateMail;

const styles = StyleSheet.create({
    btn:{
        position:'absolute',
        bottom:15,
        right:15,
        backgroundColor:'lightblue',
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',zIndex:10,
        borderRadius:5
    },
    text:{
        fontWeight:'400',
        fontSize:18,
        marginLeft:5
    }
});
