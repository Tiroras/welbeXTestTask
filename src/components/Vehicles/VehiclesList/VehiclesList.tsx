import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useVehiclesContext} from '../../../context/VehiclesContext';
import {VehicleItem} from './VehicleItem';
import {CategoryFilterType, VehicleType} from '../../../types';

interface IProps {
  categoryFilter: CategoryFilterType;
}

export const VehiclesList: React.FC<IProps> = ({categoryFilter}) => {
  const {vehicles} = useVehiclesContext();
  const [data, setData] = useState(vehicles);

  useEffect(() => {
    // Фильтруем список, если категория ТС та же, что и выбрана в фильтре,
    // или выбраны все категории, то оставляем отображение ТС
    setData(
      vehicles.reduce((acc: VehicleType[], vehicle) => {
        if (categoryFilter === 'All' || vehicle.category === categoryFilter) {
          acc.push(vehicle);
        }
        return acc;
      }, []),
    );
  }, [vehicles, categoryFilter]);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <VehicleItem
            id={item.id}
            category={item.category}
            driverName={item.driverName}
          />
        )}
      />
      {/* <ScrollView>
        {data.map(item => (
          <VehicleItem
            key={item.id}
            id={item.id}
            category={item.category}
            driverName={item.driverName}
          />
        ))}
      </ScrollView> */}
    </View>
  );
};
