import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Scroller,
  Header,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styled';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
  const navigation = useNavigation();

  const [location, setLocation] = useState('');

  return (
    <Container>
      <Scroller>
        <Header>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </Header>
        <LocationArea>
          <LocationInput
            placeholder="Onde você está ?"
            placeholderTextColor="#FFFFFF"
            value={location}
            onChangeText={(t) => setLocation(t)}
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};
