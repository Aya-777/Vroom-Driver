import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackScreenProps } from '../../../navigation/main/home/homeTypes';
import { useRideStore } from '../store/useRideStore';

export function useRideDetailsViewModel() {
  
  const navigation = useNavigation<HomeStackScreenProps<'RideDetails'>['navigation']>();
  const setRideDetails = useRideStore((state) => state.setRideDetails)

  const [timeEstimate, setTimeEstimate] = useState('30:00 m');
  const [priceEstimate, setPriceEstimate] = useState('$24.50');
  const [selectedVehicle, setSelectedVehicle] = useState('economy');
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleNextPress = () => {

    setRideDetails({
      payment: selectedPayment,
      vehicleType: selectedVehicle,
      price: priceEstimate,
      timeEstimate: timeEstimate,
    })

    navigation.navigate('ConfirmRide');
  }

  const handleBackPress= () => {
    navigation.goBack();
  }
  
  return {
    timeEstimate,
    priceEstimate,
    selectedVehicle,
    selectedPayment,
    isDropdownOpen,

    setTimeEstimate,
    setPriceEstimate,
    setSelectedVehicle,
    setSelectedPayment,
    setIsDropdownOpen,

    handleNextPress,
    handleBackPress,
  };
}