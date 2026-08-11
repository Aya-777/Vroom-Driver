import { useState, useCallback } from 'react';
import { TripStage } from '../types/trip.types';
import { useTripTimer } from '../hooks/useTripTimer';

// TODO: هاد الـ PIN لازم ييجي من الباك اند (الـ PIN المرسل لرقم الراكب)، مش hardcoded
const EXPECTED_PIN = '1234';

export function useTripViewModel(onTripCompleted: () => void) {
  const [stage, setStage] = useState<TripStage>(TripStage.DETAILS);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const { formatted: timerText } = useTripTimer(
    stage === TripStage.IN_PROGRESS,
  );

  const takeTrip = useCallback(() => setStage(TripStage.EN_ROUTE), []);

  const cancelTrip = useCallback(() => {
    // TODO: نداء API لإلغاء الرحلة
    setStage(TripStage.DETAILS);
  }, []);

  const markArrived = useCallback(() => setStage(TripStage.PIN_ENTRY), []);

  const onChangePin = useCallback((value: string) => {
    setPin(value);
    setPinError(false);

    if (value.length === 4) {
      if (value === EXPECTED_PIN) {
        setStage(TripStage.IN_PROGRESS);
      } else {
        setPinError(true);
        setTimeout(() => setPin(''), 500); // فيدباك بصري بسيط ثم تصفير
      }
    }
  }, []);

  const completeTrip = useCallback(() => {
    // TODO: نداء API لإنهاء الرحلة قبل الانتقال
    onTripCompleted();
  }, [onTripCompleted]);

  return {
    stage,
    pin,
    pinError,
    timerText,
    takeTrip,
    cancelTrip,
    markArrived,
    onChangePin,
    completeTrip,
  };
}
