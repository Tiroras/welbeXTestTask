import React from 'react';
import {Vehicles} from '../Vehicles';
import {YandexMap} from '../YandexMap';
import {useVehiclesContext} from '../../context/VehiclesContext';
import {useMainScreenModeContext} from '../../context/MainScreenModeContext';

export const MainScreenFactory: React.FC = () => {
  const {vehicles} = useVehiclesContext();
  const {currentMode} = useMainScreenModeContext();
  switch (currentMode) {
    case 'list':
      return <Vehicles />;
    case 'map':
      return <YandexMap vehicles={vehicles} />;
  }
};
