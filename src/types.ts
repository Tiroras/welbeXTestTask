// Тип категории ТС
export const vehicleCategories = ['special', 'passenger', 'cargo'] as const;
export type VehicleCategoryType = (typeof vehicleCategories)[number];

// Тип для координат ТС на карте
export interface PositionType {
  x: number;
  y: number;
}

// Тип для ТС
export interface VehicleType {
  id: number;
  driverName: string;
  phone: string;
  category: VehicleCategoryType;
  pos: PositionType;
}

export type LanguageType = 'EN' | 'RU';

export type CategoryFilterType = VehicleCategoryType | 'All';

export type MainScreenMods = 'list' | 'map';
