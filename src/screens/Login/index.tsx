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
  Title,
  UserInput,
} from "./styles";

const Login = () => {
  let [fontsLoaded, fontsError] = useFonts({
    FiraCode_400Regular,
    FiraCode_700Bold,
  });

  if (!fontsLoaded && !fontsError) {
    return;
  }

  return (
    <Container>
      <Title style={{ fontFamily: "FiraCode_700Bold" }}>Login</Title>
      <Content style={{ fontFamily: "FiraCode_400Regular" }}>
        Faça Login para acessar o app
      </Content>
      <UserInput />
      <PasswordInput secureTextEntry />
      <LoginButton>
        <Content style={{ fontFamily: "FiraCode_700Bold" }}>Entrar</Content>
      </LoginButton>
    </Container>
  );
};

export default Login;
