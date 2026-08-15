import { useEffect, useRef, useState } from 'react';
import { useProfileMenuItems } from '../constants/profileData';
import { useMainDrawer } from '../../../navigation/hooks/useMainDrawer';
import { UserProfile } from '../types/profile.types';
import { useNavigation } from '@react-navigation/native';
import { useCurrentUser } from '../../../core/store/userStore';
import { refreshProfile } from '../utils/profileUtils';

export const useProfileViewModel = () => {
  const { openSidebar } = useMainDrawer();
  const { gridItems, listItems } = useProfileMenuItems();
  const navigation = useNavigation<any>();

  const user = useCurrentUser();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isMounted = useRef(true);

  const cachedProfile: UserProfile | null = user
    ? {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        phone: user.phone_number,
        role: user.role,
        accountStatus: user.account_status ?? '',
        profileImage: user.profile_image,
        ratingAvg: user.rating ?? 5.0,
        isActive: true,
        driverInfo: user.driverInfo,
      }
    : null;

  const fetchProfile = async () => {
    try {
      setIsRefreshing(true);
      setError(null);

      const data = await refreshProfile();

      if (isMounted.current) {
        setProfile(data);
      }
    } catch (err) {
      if (isMounted.current) {
        const message =
          err instanceof Error ? err.message : 'FETCH_PROFILE_FAILED';

        setError(message);
      }
    } finally {
      if (isMounted.current) {
        setIsRefreshing(false);
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onRefresh = () => {
    fetchProfile();
  };

  const openVehicleDetails = () => {
    const currentProfile = profile ?? cachedProfile;

    if (currentProfile?.driverInfo?.vehicle) {
      navigation.navigate('VehicleDetails', {
        vehicle: currentProfile.driverInfo.vehicle,
      });
    }
  };

  const displayedProfile = profile ?? cachedProfile;

  return {
    openSidebar,
    profile: displayedProfile,
    isLoading,
    isRefreshing,
    error,
    gridItems,
    listItems,
    onRefresh,
    openVehicleDetails,
  };
};