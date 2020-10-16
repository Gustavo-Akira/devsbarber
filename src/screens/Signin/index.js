import React from 'react';
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

export default () => {
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <InputArea>
        <Input IconSvg={EmailIcon} placeholder="Digite seu email" />
        <Input IconSvg={LockIcon} placeholder="Digite sua senha" />
        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre -se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}