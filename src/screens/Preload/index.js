import React, { useEffect } from 'react';
import {Text, AsyncStorage} from 'react-native';
import {Container, LoadingIcon} from './styled';
import {useNavigation} from '@react-navigation/native';
import BarberLogo from '../../assets/barber.svg';
import {UserContext} from '../../contexts/UserContext';

import api from '../../api';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  useEffect(()=>{
    const checkToken = async ()=>{
      const token = await AsyncStorage.getItem('token');
      if(token){
        let res = await api.checkToken(token);
        if(res.token){
          userDispatch({
            type: 'setAvatar',
            payload:{
              avatar: json.data.avatar,
            }
          });
        }else{
          navigation.navigate('SignIn');
        }
      }else{
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  },[])
  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
}