import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import styled from 'styled-components';
import {useLanguageContext} from '../../../context/LanguageContext';
import {renderCategory} from '../../../utils/renderCategory';
import {CategoryFilterType, vehicleCategories} from '../../../types';
import {Picker} from '@react-native-picker/picker';
import {useText} from '../../../utils/useText';

interface IProps {
  setCategoryValue: (category: CategoryFilterType) => void;
}

const FilterWrapper = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

const FilterTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const FilterButtons = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PickerWrapper = styled(View)`
  width: 150px;
`;

const StyledPicker = styled(Picker)`
  color: black;
`;

export const ListFilters: React.FC<IProps> = ({setCategoryValue}) => {
  const [category, setCategory] = useState<CategoryFilterType>('All');
  const {language} = useLanguageContext();
  const buttonTitle = useText('Apply', 'Применить');

  const categories = ['All', ...vehicleCategories];

  // По нажатии на кнопку, меняем стейт категории в родительском
  // компоненте на стейт, выбранный в фильтре, из-за чего
  // происходит фильтрация
  const handleSubmit = () => {
    setCategoryValue(category);
  };

  return (
    <View>
      <FilterWrapper>
        <FilterTitle>{useText('Category', 'Категория')}: </FilterTitle>
        <FilterButtons>
          <PickerWrapper>
            <StyledPicker
              mode={'dropdown'}
              selectedValue={category}
              dropdownIconColor={'black'}
              onValueChange={(value: any) => setCategory(value)}>
              {categories.map(category => (
                <Picker.Item
                  key={category}
                  value={category}
                  label={renderCategory(category, language)}
                />
              ))}
            </StyledPicker>
          </PickerWrapper>
        </FilterButtons>
      </FilterWrapper>
      <Button color="#212121" title={buttonTitle} onPress={handleSubmit} />
    </View>
  );
};
