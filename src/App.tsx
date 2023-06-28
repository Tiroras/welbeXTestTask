/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {VehiclesProvider} from './context/VehiclesContext';
import {RootNavigator} from './navigation/Root';
import {LanguageProvider} from './context/LanguageContext';
import YaMap, {Geocoder} from 'react-native-yamap';
import {MainScreenModeProvider} from './context/MainScreenModeContext';

YaMap.init('a7a02974-ca49-4337-83c9-68798811feb5');
Geocoder.init('abdf0996-8810-439f-b42d-8919f7eafebf');

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LanguageProvider>
        <VehiclesProvider>
          <MainScreenModeProvider>
            <RootNavigator />
          </MainScreenModeProvider>
        </VehiclesProvider>
      </LanguageProvider>
    </NavigationContainer>
  );
}

export default App;
