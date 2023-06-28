import React, {useState} from 'react';
import {CategoryFilterType} from '../../types';
import {View} from 'react-native';
import {ListFilters} from './ListFilters';
import {VehiclesList} from './VehiclesList';

export const Vehicles = () => {
  const [categoryFilterValue, setCategoryFilterValue] =
    useState<CategoryFilterType>('All');
  return (
    <View>
      <ListFilters setCategoryValue={setCategoryFilterValue} />
      <VehiclesList categoryFilter={categoryFilterValue} />
    </View>
  );
};
