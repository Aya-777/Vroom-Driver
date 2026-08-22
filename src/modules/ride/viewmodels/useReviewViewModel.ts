import { useEffect, useState } from 'react';
import { useRideStore } from '../store/useRideStore';
import { tripApi } from '../services/tripApi';
import { Alert } from 'react-native';


export function useReviewViewModel( isReviewVisible: boolean, setIsReviewVisible : (value: boolean)=> void ,rideId?: number ) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isComplaint, setIsComplaint] = useState(false);
  const {
    clearRide,
    activeRide,
    setActiveRide,
  } = useRideStore();


  const handleSubmitReview = async () => {

    console.log("ride  ", rideId);
    
    if(rideId){
      const ride = await tripApi.getTripById(rideId);
      if(ride.status !== 'COMPLETED'){
        Alert.alert('Ride uncompleted', 'The ride must be completed to leave a review on it');
        setReview('');
        setRating(0);
        setIsComplaint(false);
        setIsReviewVisible(false);
        return;
      }
    }
        
    setIsReviewVisible(false);
    
    console.log('submiting.....');
    try {
      await tripApi.submitReview(
        { rating: rating, comment: review, is_complaint: isComplaint },
        rideId ?? activeRide?.id ?? 0,
      );
    } catch {
      console.log('Error submitting review...');
    }
    
    setReview('');
    setRating(0);
    setIsComplaint(false);
    setActiveRide(null);
    clearRide();
    setIsReviewVisible(false);
  };
  
  const handleMaybeLater = () => {
    setReview('');
    setRating(0);
    setIsComplaint(false);
    setIsReviewVisible(false);
    setActiveRide(null);
    clearRide();
  };

  return{
    isComplaint,
    rating,
    review,

    setRating,
    setIsComplaint,
    setReview,

    handleMaybeLater,
    handleSubmitReview
  }
}