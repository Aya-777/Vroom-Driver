import { useState } from 'react';

export function useTripStartedViewModel() {

  // --- UI State ---

  const [tip, setTip] = useState('0');
  const [errors, setErrors] = useState({});
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const [isBillVisible, setIsBillVisible] = useState(false);

  // Actions
  const handleBackPress = () => {
  };

  const handleSubmit = () => {
    // navigation.navigate('HomeScreen');
  };

  const handleCloseReviewModal = () => {
    // navigation.navigate('HomeScreen');
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
    handleCloseReviewModal
  };
}
