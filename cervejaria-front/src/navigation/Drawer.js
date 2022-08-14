import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Lista from '../components/Lista';
import Cadastro from '../components/Cadastro';
import Mapa from '../components/Mapa';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Lista}/>
        <Drawer.Screen name="Cadastro" component={Cadastro}/>
        <Drawer.Screen name="Mapa" component={Mapa}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppDrawer;