import { useState } from 'react';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';
import { RideValidationErrors } from '../types/ride.types';
import { validateRideInputs } from '../utils/selectRideValidation';
import { useRideStore } from '../store/useRideStore';
import { useTranslation } from 'react-i18next';

export function useSelectRideViewModel(showAlert: (title: string, msg: string) => void) {
  const { setRideDetails } = useRideStore();

  // --- UI State ---
  const [isNowDropdownOpen, setIsNowDropdownOpen] = useState(false);
  const [isForMeDropdownOpen, setIsForMeDropdownOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState('forMe');
  const [selectedTime, setSelectedTime] = useState('now');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [errors, setErrors] = useState<RideValidationErrors>({});
  const { t } = useTranslation('selectRide');

  // --- Logic ---
  const validate = (): boolean => {
    const rawErrors = validateRideInputs(fromLocation, toLocation);

    const translatedErrors: RideValidationErrors = {};
    Object.keys(rawErrors).forEach((key) => {
      translatedErrors[key as keyof RideValidationErrors] = t(rawErrors[key]);
    });

    setErrors(translatedErrors);
    return Object.keys(rawErrors).length === 0;
  };

  // Actions
  const saveRideDetails = () => {
    if (!validate()) {
      showAlert('Missing Information', 'Please fill in both pickup and destination locations.');
      return;
    }

    setRideDetails({
      pickupLocation: fromLocation,
      dropoffLocation: toLocation,
      selectedPerson: selectedPerson,
      time: selectedTime,
      contactPhone: contactPhone
    });

  };

  const handleBackPress = () => {
  };

  return {
    // State
    isNowDropdownOpen,
    isForMeDropdownOpen,
    selectedPerson,
    selectedTime,
    fromLocation,
    toLocation,
    contactPhone,
    errors,
    
    // Setters
    setIsNowDropdownOpen,
    setIsForMeDropdownOpen,
    setSelectedPerson,
    setSelectedTime,
    setFromLocation,
    setToLocation,
    setContactPhone,
    
    // Actions
    validate,
    saveRideDetails,
    handleBackPress,
  };
}