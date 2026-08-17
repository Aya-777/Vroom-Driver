import { SafetySection } from '../types/safety.types';

import CheckIcon from '../../../assets/svg/common/check.svg';
import MyLocationIcon from '../../../assets/svg/common/myLocation.svg';
import EmergencyContactIcon from '../../../assets/svg/contact/emergencyContact.svg';
import HistoryIcon from '../../../assets/svg/common/history.svg';
import ChatIcon from '../../../assets/svg/contact/chat.svg';
import StarIcon from '../../../assets/svg/common/star.svg';
import CallIcon from '../../../assets/svg/contact/call.svg';
import SafetyIcon from '../../../assets/svg/profile/safety.svg';

export const safetySections: SafetySection[] = [
  {
    id: 'beforeTrip',
    titleKey: 'beforeTrip',
    items: [
      {
        id: 'driverVerification',
        Icon: SafetyIcon,
        titleKey: 'driverVerification',
        descKey: 'driverVerificationDesc',
      },
      {
        id: 'vehicleVerification',
        Icon: CheckIcon,
        titleKey: 'vehicleVerification',
        descKey: 'vehicleVerificationDesc',
      },
    ],
  },
  {
    id: 'duringTrip',
    titleKey: 'duringTrip',
    items: [
      {
        id: 'shareMyTrip',
        Icon: MyLocationIcon,
        titleKey: 'shareMyTrip',
        descKey: 'shareMyTripDesc',
      },
      {
        id: 'emergencyButton',
        Icon: EmergencyContactIcon,
        titleKey: 'emergencyButton',
        descKey: 'emergencyButtonDesc',
      },
      {
        id: 'rideCheck',
        Icon: HistoryIcon,
        titleKey: 'rideCheckTitle',
        descKey: 'rideCheckDesc',
      },
      {
        id: 'inAppReporting',
        Icon: ChatIcon,
        titleKey: 'inAppReporting',
        descKey: 'inAppReportingDesc',
      },
    ],
  },
  {
    id: 'afterTrip',
    titleKey: 'afterTrip',
    items: [
      {
        id: 'rateAndReview',
        Icon: StarIcon,
        titleKey: 'rateAndReview',
        descKey: 'rateAndReviewDesc',
      },
      {
        id: 'support247',
        Icon: CallIcon,
        titleKey: 'support247',
        descKey: 'support247Desc',
      },
    ],
  },
];
