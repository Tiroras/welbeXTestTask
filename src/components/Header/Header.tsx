import React from 'react';
import {View, Text} from 'react-native';
import {Settings} from '../../icons/Settings';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootNavigatorParamList} from '../../navigation/Root';
import {RootEnum} from '../../navigation/root-enum';
import {ChangeModeButton} from './ChangeModeButton';
import {useMainScreenModeContext} from '../../context/MainScreenModeContext';

interface IProps {
  children: string;
  tintColor?: string | undefined;
}

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

const Buttons = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Header: React.FC<IProps> = ({children}) => {
  const nav = useNavigation<StackNavigationProp<RootNavigatorParamList>>();
  const {currentMode, handleCurrentMode} = useMainScreenModeContext();

  const handlePress = () => {
    nav.navigate(RootEnum.SETTINGS);
  };

  return (
    <Wrapper>
      <Title>{children}</Title>
      <Buttons>
        <ChangeModeButton
          currentMode={currentMode}
          setCurrentMode={handleCurrentMode}
        />
        <Settings onPress={handlePress} />
      </Buttons>
    </Wrapper>
  );
};
