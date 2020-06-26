import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import DATA from './data.js';

interface Repository {
  id: string;
  name: string;
  file: string;
}

const Teste: React.FC = () => {
  const [persons, setPersons] = useState<Repository[]>([]);
  const navigation = useNavigation();

  function handleNav(): void {
    navigation.dispatch(DrawerActions.openDrawer);
    console.log('teste');
  }
  const LatLng = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  return (
    <>
      <Container>
        <TouchableOpacity onPress={handleNav}>
          <Icon name="align-left" size={24} color="#17171B" />
        </TouchableOpacity>
        <Wrapper>
          <Title>SERVIÇOS</Title>
          <Slider>
            <FlatList
              data={DATA}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item: person }) => (
                <PetCard>
                  <Pet source={{ uri: person.file }} />
                  <PetTitle>Tesdte</PetTitle>
                </PetCard>
              )}
            />
          </Slider>
        </Wrapper>
      </Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          flex: 1,
          zIndex: -1,
        }}
        region={{
          latitude: -27.585186,
          longitude: -48.523403,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </>
  );
};

export default Teste;

const Container = styled.View`
  background: #84dd63;
  height: 180px;
`;

const Wrapper = styled.View`
  position: absolute;
  height: 130px;
  top: 50%;
  left: 24px;
  right: 24px;

  background: #000;
  border-radius: 15px;

  z-index: 2;
  elevation: 7;
`;

const Title = styled.Text`
  font-family: 'Khula-SemiBold';
  font-size: 18px;
  padding: 8px;
`;

const Slider = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PetCard = styled.View`
  margin-left: 15px;
  align-items: center;
`;

const Pet = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 50px;
`;

const PetTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

const MapContainer = styled.View`
  width: 400px;
  height: 500px;
`;
