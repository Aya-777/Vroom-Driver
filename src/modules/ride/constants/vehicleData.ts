import { vehicleImages } from './vehicleImages';
import { useTranslation } from 'react-i18next';

const {t} = useTranslation(['rideDetails']);

export const VEHICLE_DATA = [
  { id: 'economy', type_name: t('economy'), image: vehicleImages.economy },
  { id: 'comfort', type_name: t('comfort'), image: vehicleImages.comfort },
  { id: 'xl', type_name: t('xl'), image: vehicleImages.xl },
];