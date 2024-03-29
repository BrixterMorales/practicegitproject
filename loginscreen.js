import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [username, setUsername] = useState("b");
  const [password, setPassword] = useState("a");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === "b" && password === "a") {
      navigation.navigate("Dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  
  const handlecreate = () => {
  
    navigation.navigate("createaccount");
    
  };

  return (
    <View style={styles.container}>
         <Image
        source={require('./assets/logo2.png')}
        style={styles.logo}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Image
          style={styles.icon}
          source={require("./assets/usernameicon.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <Image
          style={styles.icon}
          source={require("./assets/passwordicon.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handlecreate}>
        <Text style={styles.loginText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#deb887",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      width: 30, // Adjust the width of the icon
      height: 30, // Adjust the height of the icon
      marginLeft: 15,
      marginRight: 10,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 5,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "60%", // Adjust the width of the button
      borderRadius: 30,
      height: 30,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
    loginText: {
      color: "white",
    },
  });