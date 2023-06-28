// Контекст для хранения ТС, полученных из JSON
import React, {
  memo,
  useState,
  useMemo,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';
import {VehicleType} from '../types';
import noop from 'lodash.noop';

interface InitialDataType {
  vehicles: VehicleType[];
  getVehicles: () => void;
}

const initialData: InitialDataType = {
  vehicles: [],
  getVehicles: noop,
};

const VehiclesContext = React.createContext(initialData);

export const VehiclesProvider: React.FC<PropsWithChildren> = memo(
  ({children}) => {
    const [vehicles, setVehicles] = useState<VehicleType[]>([]);

    const getVehicles = useCallback(() => {
      const vehicles = require('../data/vehicles.json');
      setVehicles(vehicles);
    }, []);

    const value = useMemo(
      () => ({vehicles, getVehicles}),
      [vehicles, getVehicles],
    );

    return (
      <VehiclesContext.Provider value={value}>
        {children}
      </VehiclesContext.Provider>
    );
  },
);

export const useVehiclesContext = () => useContext(VehiclesContext);
