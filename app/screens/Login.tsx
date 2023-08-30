import { StyleSheet, View, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwerd, setPassword] = useState("");
  const { onLogin, onRegister } = useAuth();

  const login = async () => {
    const result = await onLogin!(email, passwerd);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const resister = async () => {
    const result = await onRegister!(email, passwerd);
    if (result && result.error) {
      alert(result.msg);
    } else {
      login();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/premium-vector/programming-code-logo-modern-coding-logo-web-desaign-logo_327835-2124.jpg?w=1380",
        }}
        style={{ width: 400, height: 400 }}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Parola"
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
        />
        <Button onPress={login} title="Login" color={"#5652FF"} />
        <Button onPress={resister} title="Register" color={"#18C9BF"} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { alignItems: "center", width: "100%" },
  image: { width: "50%", height: "50%", resizeMode: "contain" },
  form: { gap: 10, width: "60%" },
  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});
