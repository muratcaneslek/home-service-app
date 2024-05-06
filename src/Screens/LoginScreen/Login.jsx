import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../utils/colors";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.loginImg}
        source={require("../../Assets/login.png")}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>
          Let's Find
          <Text style={styles.highlight}>
            {" "}
            Professional Cleaning and Repair
          </Text>{" "}
          Service
        </Text>
        <Text style={styles.description}>
          Best App tto find services near you which deliver you a professional
          service{" "}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("kllasd")}
        >
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  loginImg: {
    width: 230,
    height: 450,
    marginTop: 50,
    borderWidth: 3,
    borderColor: colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: colors.PRIMARY,
    height: "70%",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 25,
    color: colors.WHITE,
    textAlign: "center",
  },
  highlight: {
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    color: colors.WHITE,
    paddingTop: 20,
    textAlign: "center",
  },
  button: {
    padding: 15,
    backgroundColor: colors.WHITE,
    borderRadius: 30,
    marginTop: 40,
  },
  buttonText: {
    color: colors.PRIMARY,
    textAlign: "center",
    fontSize: 15,
  },
});
