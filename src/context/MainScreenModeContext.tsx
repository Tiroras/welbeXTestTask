// Контекст для хранения состояния главного экрана с картой и списком ТС
import React, {
  memo,
  useState,
  useMemo,
  useCallback,
  useContext,
  PropsWithChildren,
} from 'react';
import {MainScreenMods} from '../types';
import noop from 'lodash.noop';

interface InitialDataType {
  currentMode: MainScreenMods;
  handleCurrentMode: (mode: MainScreenMods) => void;
}

const initialData: InitialDataType = {
  currentMode: 'list',
  handleCurrentMode: noop,
};

const MainScreenModeContext = React.createContext(initialData);

export const MainScreenModeProvider: React.FC<PropsWithChildren> = memo(
  ({children}) => {
    const [currentMode, setCurrentMode] = useState<MainScreenMods>('list');

    const handleCurrentMode = useCallback((mode: MainScreenMods) => {
      setCurrentMode(mode);
    }, []);

    const value = useMemo(
      () => ({currentMode, handleCurrentMode}),
      [currentMode, handleCurrentMode],
    );

    return (
      <MainScreenModeContext.Provider value={value}>
        {children}
      </MainScreenModeContext.Provider>
    );
  },
);

export const useMainScreenModeContext = () => useContext(MainScreenModeContext);
