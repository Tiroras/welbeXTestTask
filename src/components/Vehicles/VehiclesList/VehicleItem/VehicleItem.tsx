import React from 'react';
import {Text, View} from 'react-native';
import {styled} from 'styled-components';
import {useLanguageContext} from '../../../../context/LanguageContext';
import {RootEnum} from '../../../../navigation/root-enum';
import {VehicleType} from '../../../../types';
import {renderCategory} from '../../../../utils/renderCategory';
import {useText} from '../../../../utils/useText';
import {useTypedNavigation} from '../../../../utils/useTypedNavigation';

type IProps = Omit<VehicleType, 'phone' | 'pos'>;

const Vehicle = styled(View)`
  background: white;
  margin: 5px;
  padding: 15px;
  border-radius: 15px;
`;

const VehicleName = styled(Text)`
  font-weight: bold;
  font-size: 18px;
  color: black;
`;

const Info = styled(View)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const TextField = styled(Text)`
  color: black;
`;

export const VehicleItem: React.FC<IProps> = ({id, driverName, category}) => {
  const {navigate} = useTypedNavigation();
  const {language} = useLanguageContext();
  const vehicleName = useText('Vehicle', 'ТС');

  const handleTouch = () => {
    navigate(RootEnum.VEHICLE_INFO, {id});
  };

  return (
    <Vehicle onTouchEnd={handleTouch}>
      <VehicleName>
        {vehicleName} #{id}
      </VehicleName>
      <Info>
        <TextField>{driverName}</TextField>
        <TextField>{renderCategory(category, language)}</TextField>
      </Info>
    </Vehicle>
  );
};
