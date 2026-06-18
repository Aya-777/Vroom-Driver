import HomeIcon from '../../../assets/svg/common/home.svg';
import WorkIcon from '../../../assets/svg/common/work.svg';

export const recentDestinations = [
  {
    id: '1',
    title: 'Home',
    subtitle: '248 West 35th St, New York',
    // store the component reference instead of JSX to keep this file as .ts
    icon: HomeIcon,
  },

  {
    id: '2',
    title: 'Office',
    subtitle: 'One World Trade Center',
    icon: WorkIcon,
  },
];