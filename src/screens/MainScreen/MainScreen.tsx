import React, {useEffect} from 'react';
import {useVehiclesContext} from '../../context/VehiclesContext';
import {MainScreenFactory} from '../../components/MainScreenFactory';

export const MainScreen: React.FC = () => {
  const {getVehicles} = useVehiclesContext();

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  return <MainScreenFactory />;
};
