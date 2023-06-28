import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Marker, YaMap} from 'react-native-yamap';
import {VehicleType} from '../../types';
import {MarkerIcon} from './MarkerIcon';
import {useTypedNavigation} from '../../utils/useTypedNavigation';
import {RootEnum} from '../../navigation/root-enum';

interface IProps {
  vehicles: VehicleType[];
}

export const YandexMap: React.FC<IProps> = ({vehicles}) => {
  const {navigate} = useTypedNavigation();

  const handlePress = (id: number) => {
    navigate(RootEnum.VEHICLE_INFO, {id});
  };

  return (
    <View>
      <YaMap
        showUserPosition={false}
        initialRegion={{lat: 55.753, lon: 37.622}}
        style={MapStyles.map}>
        {vehicles.map(({id, pos, category}) => (
          <Marker
            key={id}
            point={{lat: pos.x, lon: pos.y}}
            children={<MarkerIcon category={category} />}
            onPress={() => handlePress(id)}
          />
        ))}
      </YaMap>
    </View>
  );
};

const MapStyles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
