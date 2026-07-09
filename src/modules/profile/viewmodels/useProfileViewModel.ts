import {
  profileGridItems,
  profileListItems,
} from '../constants/profileData';

export const useProfileViewModel = () => {

  return {
    gridItems: profileGridItems,
    listItems: profileListItems,
  };
};