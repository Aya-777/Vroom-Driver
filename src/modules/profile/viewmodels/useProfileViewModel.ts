import { useEffect, useRef, useState } from 'react';
import { useProfileMenuItems } from '../constants/profileData';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { profileRepository } from '../repositories/profileRepository';
import { UserProfile } from '../types/profile.types';
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser, updateCurrentUser } from '../../../core/store/userStore';

export const useProfileViewModel = () => {
  const { openSidebar } = useMainDrawer();
  const { gridItems, listItems } = useProfileMenuItems();
  const navigation = useNavigation<any>();

  const cachedUser = useCurrentUser();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMounted = useRef(true);

  const fetchProfile = async (mode: 'initial' | 'refresh') => {
    try {
      if (mode === 'initial') setIsLoading(true);
      else setIsRefreshing(true);
      setError(null);

      const data = await profileRepository.getMyProfile();
      if (isMounted.current) {
        setProfile(data);

        updateCurrentUser({
          first_name: data.firstName,
          last_name: data.lastName,
          phone_number: data.phone,
          profile_image: data.profileImage,
          account_status: data.accountStatus,
          rating: data.ratingAvg,
          driverInfo: data.driverInfo,
        });
      }
    } catch (err) {
      if (isMounted.current) {
        const message = err instanceof Error ? err.message : 'FETCH_PROFILE_FAILED';
        setError(message);
      }
    } finally {
      if (isMounted.current) {
        if (mode === 'initial') setIsLoading(false);
        else setIsRefreshing(false);
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;
    fetchProfile('initial');
    return () => {
      isMounted.current = false;
    };
  }, []);

  const onRefresh = () => fetchProfile('refresh');

  const openVehicleDetails = () => {
    if (profile?.driverInfo?.vehicle) {
      navigation.navigate('VehicleDetails', { vehicle: profile.driverInfo.vehicle });
    }
  };

  const fallbackProfile: UserProfile | null = !profile && cachedUser
    ? {
      id: cachedUser.id,
      firstName: cachedUser.first_name,
      lastName: cachedUser.last_name,
      phone: cachedUser.phone_number,
      role: cachedUser.role,
      accountStatus: cachedUser.account_status ?? '',
      profileImage: cachedUser.profile_image,
      ratingAvg: cachedUser.rating ?? 5.0,
      isActive: true,
      driverInfo: cachedUser.driverInfo,
    }
    : null;

  return {
    openSidebar,
    profile: profile ?? fallbackProfile,
    isLoading,
    isRefreshing,
    error,
    gridItems,
    listItems,
    onRefresh,
    openVehicleDetails,
  };
};