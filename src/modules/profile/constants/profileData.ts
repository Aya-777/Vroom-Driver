import HistoryIcon from '../../../assets/svg/common/history.svg';
import NotificationsIcon from '../../../assets/svg/common/notifications.svg';
import StarIcon from '../../../assets/svg/common/star.svg';
import SafetyIcon from '../../../assets/svg/profile/safety.svg';

import SettingsIcon from '../../../assets/svg/profile/settings.svg';
import PrivacyIcon from '../../../assets/svg/profile/privacy.svg';
import EmergencyContactIcon from '../../../assets/svg/contact/emergencyContact.svg';
import HelpIcon from '../../../assets/svg/profile/help.svg';
import InfoIcon from '../../../assets/svg/common/info.svg';
import MailIcon from '../../../assets/svg/contact/mail.svg';
import { useTranslation } from 'react-i18next';

const {t} = useTranslation('profile');

export const profileGridItems = [
  { id: '1', title: t('rideHistory') , icon: HistoryIcon },
  { id: '2', title:  t('notifications'), icon: NotificationsIcon },
  { id: '3', title:  t('favoriteDrivers'), icon: StarIcon },
  { id: '4', title:  t('safety'), icon: SafetyIcon },
];

export const profileListItems = [
  { id: '1', title:  t('settings'), icon: SettingsIcon },
  { id: '2', title: t('privacyAndSecurity'), icon: PrivacyIcon },
  { id: '3', title: t('emergencyContact'), icon: EmergencyContactIcon },
  { id: '4', title: t('help'), icon: HelpIcon },
  { id: '5', title: t('savedLocations'), icon: StarIcon },
  { id: '6', title: t('aboutUs'), icon: InfoIcon },
  { id: '7', title: t('contactUs'), icon: MailIcon },
];