import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { Container, Header, Head, TextHead, TextHeadSecond } from './styles';
import logo from '../../assets/logo/logo.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNav(): void {
    navigation.dispatch(DrawerActions.openDrawer);
    console.log('teste');
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={handleNav}>
          <Icon name="align-left" size={24} color="#17171B" />
        </TouchableOpacity>
        <Image source={logo} />
        <Icon name="search" size={24} color="#17171B" />
      </Header>
      <Head>
        <TextHead>Bem vindo ao Marvel Heroes</TextHead>
        <TextHeadSecond>Escolha o seu Personagem</TextHeadSecond>
      </Head>
      <MapView style={{ height: 400, width: 300 }} />
    </Container>
  );
};

export default Home;
