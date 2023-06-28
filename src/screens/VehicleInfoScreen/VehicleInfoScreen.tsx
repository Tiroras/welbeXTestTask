import React from 'react';
import {View, Linking} from 'react-native';
import {useVehiclesContext} from '../../context/VehiclesContext';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootEnum} from '../../navigation/root-enum';
import {RootNavigatorParamList} from '../../navigation/Root';
import {renderCategory} from '../../utils/renderCategory';
import {useText} from '../../utils/useText';
import {InfoItem} from './InfoItem';
import {useLanguageContext} from '../../context/LanguageContext';
import {styled} from 'styled-components';
import {Phone} from '../../icons/Phone';
import {Bubble} from '../../icons/Bubble';
import {YandexMap} from '../../components/YandexMap';

const Buttons = styled(View)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
`;

export const VehicleInfoScreen: React.FC = () => {
  const {params} =
    useRoute<RouteProp<RootNavigatorParamList, RootEnum.VEHICLE_INFO>>();

  const {language} = useLanguageContext();
  const vehicle = useVehiclesContext().vehicles.find(
    veh => veh.id === params.id,
  );

  const vehicleName = useText(`Vehicle #${vehicle?.id}`, `ТС #${vehicle?.id}`);
  const phone = vehicle?.phone ?? '';

  const onPressLinking = (mask: string) => async () => {
    await Linking.openURL(mask);
  };

  // Метод для открытия приложения телефона с набранным номером
  const onPhonePress = onPressLinking(`tel:${phone}`);
  // Метод для открытия чата whatsapp, привязанного к телефону водителя
  const onMessagePress = onPressLinking(`whatsapp://send?phone=${phone}`);

  return (
    <View>
      <InfoItem title={useText('Vehicle name', 'Имя ТС')} info={vehicleName} />
      <InfoItem
        title={useText('Driver Name', 'Имя водителя')}
        info={vehicle?.driverName ?? ''}
      />
      <InfoItem title={useText('Phone', 'Номер телефона')} info={phone} />
      <InfoItem
        title={useText('Vehicle category', 'Категория ТС')}
        info={renderCategory(vehicle?.category ?? '', language)}
      />
      <Buttons>
        <Phone width="50px" height="50px" onPress={onPhonePress} />
        <Bubble width="50px" height="50px" onPress={onMessagePress} />
      </Buttons>
      <YandexMap vehicles={[vehicle!]} />
    </View>
  );
};
