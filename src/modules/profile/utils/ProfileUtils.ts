import { profileRepository } from '../repositories/profileRepository';
import { updateCurrentUser } from '../../../core/store/userStore';
import { useProfileStore } from '../store/useProfileStore';

export const refreshProfile = async () => {
  const data = await profileRepository.getMyProfile();

  updateCurrentUser({
    first_name: data.firstName,
    last_name: data.lastName,
    phone_number: data.phone,
    profile_image: data.profileImage,
    account_status: data.accountStatus,
    rating: data.ratingAvg,
    driverInfo: data.driverInfo,
  });

  useProfileStore.getState().setUserProfile(data);

  return data;
};