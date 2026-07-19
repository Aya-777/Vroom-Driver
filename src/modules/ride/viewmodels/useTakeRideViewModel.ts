import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';
import { useTranslation } from 'react-i18next';

export function useTakeRideViewModel() {
  const navigation =
    useNavigation<HomeStackScreenProps<'SelectRide'>['navigation']>();

  // --- UI State ---

  const [tip, setTip] = useState('0');
  const [errors, setErrors] = useState({});
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const [isBillVisible, setIsBillVisible] = useState(false);

  // Actions
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    navigation.navigate('HomeScreen');
  };

  const handleCloseReviewModal = () => {
    navigation.navigate('HomeScreen');
  };

  return {
    // State
    tip,
    errors,
    isReviewVisible,
    isBillVisible,

    // Setters
    setTip,
    setErrors,
    setIsBillVisible,
    setIsReviewVisible,

    // Actions
    handleBackPress,
    handleSubmit,
    handleCloseReviewModal,
  };
}
