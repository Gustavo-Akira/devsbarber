import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styled';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import Input from '../../components/Input';

import api from '../../api';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };
  const handleSignAttemptClick = async() => {
    if (emailField !== '' && passwordField !== '') {
      let json = await api.signIn(emailField, passwordField);
      if (json.token) {
        await AsyncStorage.setItem('key', json.token);
        userDispatch({
          type: 'setAvatar',
          payload:{
            avatar: json.data.avatar,
          }
        });
        navigation.reset({
          routes:[{name:'MainTab'}]
        });
      } else {
        alert('E-mail e/ou senha incorretos');
      }
    } else {
      alert('Preencha os campos');
    }
  };
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <Input
          IconSvg={EmailIcon}
          placeholder="Digite seu email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <Input
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password
        />
        <CustomButton onPress={handleSignAttemptClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre -se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}