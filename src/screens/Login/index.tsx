import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useFonts,
  FiraCode_400Regular,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";
import {
  Container,
  Content,
  LoginButton,
  PasswordInput,
  RegisterButton,
  Title,
  UserInput,
} from "./styles";
import { User } from "../../types/user";
import { Alert } from "react-native";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let [fontsLoaded, fontsError] = useFonts({
    FiraCode_400Regular,
    FiraCode_700Bold,
  });

  const storeData = async () => {
    const value: User = {
      password,
      username,
    };
    try {
      console.log("User data", value);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);

      setUsername("");
      setPassword("");

      Alert.alert("Alert Title", "Dados salvos", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@user");

      const data: User = jsonValue != null ? JSON.parse(jsonValue) : null;

      setUsername(data.username);
      setPassword(data.password);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(username);
  }, [username]);

  useEffect(() => {
    console.log("use effect");
    if (!fontsLoaded && !fontsError) {
      return;
    }
    getData();
  }, []);

  return (
    <Container>
      <Title style={{ fontFamily: "FiraCode_700Bold" }}>Login</Title>
      <Content style={{ fontFamily: "FiraCode_400Regular" }}>
        Faça Login para acessar o app
      </Content>
      <UserInput
        value={username}
        onChangeText={setUsername}
        placeholder="Insira seu usuário"
      />
      <PasswordInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="Insira sua senha"
      />
      <LoginButton onPress={storeData}>
        <Content style={{ fontFamily: "FiraCode_700Bold" }}>Entrar</Content>
      </LoginButton>
      <RegisterButton>
        <Content style={{ fontFamily: "FiraCode_400Regular" }}>
          Não tem conta? Registre-se!
        </Content>
      </RegisterButton>
    </Container>
  );
};

export default Login;
