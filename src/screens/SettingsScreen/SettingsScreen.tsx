import React from 'react';
import {View, Text} from 'react-native';
import {useLanguageContext} from '../../context/LanguageContext';
import {Picker} from '@react-native-picker/picker';
import {styled} from 'styled-components';
import {useText} from '../../utils/useText';

const Setting = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin: 10px;
  padding: 0 10px;
  border-radius: 10px;
`;

const PickerWrapper = styled(View)`
  width: 120px;
`;

const StyledPicker = styled(Picker)`
  color: black;
`;

const Title = styled(Text)`
  color: black;
`;

export const SettingsScreen = () => {
  const {language, switchLanguage} = useLanguageContext();
  const title = useText('Language', 'Язык');
  return (
    <View>
      <Setting>
        <Title>{title}</Title>
        <PickerWrapper>
          <StyledPicker
            selectedValue={language}
            onValueChange={(value: any) => switchLanguage(value)}>
            <Picker.Item value={'RU'} label={'RU'} />
            <Picker.Item value={'EN'} label={'EN'} />
          </StyledPicker>
        </PickerWrapper>
      </Setting>
    </View>
  );
};
