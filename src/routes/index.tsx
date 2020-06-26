import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Hero from '../pages/Hero';
import Teste from '../pages/Teste';

// const App = createStackNavigator();
const Drawer = createDrawerNavigator();

const Routes: React.FC = () => (
  <Drawer.Navigator initialRouteName="Teste">
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Hero" component={Hero} />
    <Drawer.Screen name="Teste" component={Teste} />
  </Drawer.Navigator>
);

export default Routes;
