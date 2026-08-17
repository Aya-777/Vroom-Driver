import React from 'react';
import PrivacyIcon from '../../../assets/svg/profile/privacy.svg';
import WalletIcon from '../../../assets/svg/payment/wallet.svg';
import StarIcon from '../../../assets/svg/common/star.svg';

import SettingsIcon from '../../../assets/svg/profile/settings.svg';
import { useTranslation } from 'react-i18next';

export const useProfileMenuItems = () => {
  const { t } = useTranslation('profile');

  const gridItems = [
    { id: '1', title: t('safety'), icon: PrivacyIcon },
    { id: '2', title: t('wallet'), icon: WalletIcon },
    { id: '3', title: t('favoriteDrivers'), icon: StarIcon },
    { id: '4', title: t('settings'), icon: SettingsIcon },
  ];

  const listItems: { id: string; title: string; icon: React.ElementType }[] = [];

  return { gridItems, listItems };
};



