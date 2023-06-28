import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen} from '../screens/MainScreen/MainScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {VehicleInfoScreen} from '../screens/VehicleInfoScreen';
import {RootEnum} from './root-enum';
import {Header} from '../components/Header';
import {useText} from '../utils/useText';
import {useMainScreenModeContext} from '../context/MainScreenModeContext';

export type RootNavigatorParamList = Omit<
  Record<RootEnum, undefined>,
  RootEnum.VEHICLE_INFO
> & {
  [RootEnum.VEHICLE_INFO]: {id: number};
};
const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
  const {currentMode} = useMainScreenModeContext();

  const listTitle = useText('Vehicles List', 'Список ТС');
  const mapTitle = useText('Vehicles Map', 'Карта ТС');
  const mainTitle = currentMode === 'list' ? listTitle : mapTitle;

  const vehicleInfoTitle = useText('Vehicle Information', 'Информация о ТС');
  const settingsTitle = useText('Settings', 'Настройки');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootEnum.MAIN}
        component={MainScreen}
        options={{
          headerTitle: props => <Header {...props} />,
          title: mainTitle,
        }}
      />
      <Stack.Screen
        name={RootEnum.SETTINGS}
        component={SettingsScreen}
        options={{
          title: settingsTitle,
        }}
      />
      <Stack.Screen
        name={RootEnum.VEHICLE_INFO}
        component={VehicleInfoScreen}
        options={{
          title: vehicleInfoTitle,
        }}
      />
    </Stack.Navigator>
  );
};
