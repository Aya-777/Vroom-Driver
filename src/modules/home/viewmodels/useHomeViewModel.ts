import RideIcon from '../../../assets/svg/common/ride.svg';
import ReserveIcon from '../../../assets/svg/home/reserve.svg';
import { useTranslation } from 'react-i18next';

import { recentDestinations } from '../constants/homeData';

export const useHomeViewModel = () => {

  const { t } = useTranslation(['common', 'home']);

  const services = [
    {
      id: '1',
      title: t('ride'),
      icon: RideIcon,
      active: true,
    },

    {
      id: '2',
      title: t('home:services.reserve'),
      icon: ReserveIcon,
      active: false,
    },
  ];

  return {
    services,
    recentDestinations,
  };
};