import styled from "styled-components/native";

export const LoginButton = styled.TouchableOpacity`
  background-color: #003049;
  color: #fff;
  height: 6cqi;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 40px;
`;

export const UserInput = styled.TextInput`
  background-color: #f1faee;
  color: #252525;
  width: 90%;
  margin: 10px;
  height: 60px;
  border-radius: 40px;
  padding-left: 20px;
`;

export const PasswordInput = styled.TextInput`
  color: #252525;
  background-color: #f1faee;
  width: 90%;
  margin: 10px;
  height: 60px;
  border-radius: 40px;
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #fff;
  margin: 10px;
`;

export const Content = styled.Text`
  font-size: 20px;
  color: #fff;
  margin: 10px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #252525;
  width: 100%;
  padding: 5px;
`;
