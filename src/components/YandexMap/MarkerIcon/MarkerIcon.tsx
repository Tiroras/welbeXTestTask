import React from 'react';
import {VehicleCategoryType} from '../../../types';
import {SpecialVehicle} from '../../../icons/SpecialVehicle';
import {PassengerVehicle} from '../../../icons/PassengerVehicle';
import {CargoVehicle} from '../../../icons/CargoVehicle';

interface IProps {
  category: VehicleCategoryType;
}

export const MarkerIcon: React.FC<IProps> = ({category}) => {
  switch (category) {
    case 'special':
      return <SpecialVehicle />;
    case 'passenger':
      return <PassengerVehicle />;
    case 'cargo':
      return <CargoVehicle />;
    default:
      return null;
  }
};
