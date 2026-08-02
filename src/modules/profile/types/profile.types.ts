import { ElementType } from 'react';
import { DriverStatus } from '../../home/services/dto/home.dto';

export type ProfileGridItem = {
  id: string;
  title: string;
  icon: ElementType;
  onPress?: () => void;
};

export type ProfileListItem = {
  id: string;
  title: string;
  icon: ElementType;
  onPress?: () => void;
};

export type VehicleImage = {
  id: number;
  slot: 'FRONT' | 'BACK' | 'SIDE' | 'INTERIOR';
  url: string;
};

export type Vehicle = {
  brand: string;
  model: string;
  customBrandName: string | null;
  customModelName: string | null;
  color: string;
  customColorName: string | null;
  status: string;
  plateNumber: string;
  seatsNum: number;
  vehicleType: string;
  manufactureYear: number;
  images: VehicleImage[];
};

export type DriverInfo = {
  driverStatus: DriverStatus;
  nationalId: string;
  birthdate: string;
  vehicle: Vehicle;
};

export type UserProfile = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  accountStatus: string;
  profileImage: string | null;
  ratingAvg: number;
  isActive: boolean;
  driverInfo?: DriverInfo;
};