import { useState } from 'react';
import { useRideStore } from '../store/useRideStore';

export function useRideDetailsViewModel() {
  
  const setRideDetails = useRideStore((state) => state.setRideDetails)

  const [timeEstimate, setTimeEstimate] = useState('30:00 m');
  const [priceEstimate, setPriceEstimate] = useState('$24.50');
  const [selectedVehicle, setSelectedVehicle] = useState('economy');
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const saveRideDetails = () => {

    setRideDetails({
      payment: selectedPayment,
      vehicleType: selectedVehicle,
      price: priceEstimate,
      timeEstimate: timeEstimate,
    })

  }

  const handleBackPress= () => {
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

    saveRideDetails,
    handleBackPress,
  };
}