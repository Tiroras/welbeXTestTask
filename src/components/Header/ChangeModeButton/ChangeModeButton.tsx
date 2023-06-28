import React from 'react';
import {MainScreenMods} from '../../../types';
import styled from 'styled-components';
import {View} from 'react-native';
import {List} from '../../../icons/List';
import {MapIcon} from '../../../icons/MapIcon';

interface IProps {
  currentMode: MainScreenMods;
  setCurrentMode: (mode: MainScreenMods) => void;
}

const ButtonWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

export const ChangeModeButton: React.FC<IProps> = ({
  currentMode,
  setCurrentMode,
}) => (
  <ButtonWrapper>
    {currentMode === 'map' ? (
      <List onPress={() => setCurrentMode('list')} />
    ) : (
      <MapIcon onPress={() => setCurrentMode('map')} />
    )}
  </ButtonWrapper>
);
