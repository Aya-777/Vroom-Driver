import React, { useEffect, useMemo } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import {BaseBottomSheet} from '../../../../shared/components/BaseBottomSheet';
import { createStyles } from '../../styles/trip.styles';
import { useTranslation } from 'react-i18next';
import { TripSummaryGrid } from '../../components/TripStartedScreen/TripSummaryGrid';
import {DriverInfoCard} from '../../components/TripStartedScreen/DriverInfoCard';
import { useTripStartedViewModel } from '../../viewmodels/useTripStartedViewModel'; 
import ReviewModal from '../../../review/components/ReviewModal';
import TripEndedModal from '../TripEndedModal/TripEndedModal';

type Props = {
  onTripEnded: () => void;
};

export default function TripStartedScreen({ onTripEnded }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['rideStarted', 'common']);

  const vm = useTripStartedViewModel();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      vm.setIsBillVisible(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const snapPoints = useMemo(() => ['30%', '70%'], []);  

  return (
    <>
      <BaseBottomSheet 
        isVisible={true}
        snapPoints={snapPoints}
        index={1}
      >
        <StatusBar translucent backgroundColor="transparent" />
        <Text style={styles.tripStartedMessage}>{t('tripStarted')}</Text>
        {/* Driver Card */}
        <DriverInfoCard 
          name="David" 
          rating="4.9" 
          car="Black Toyota Camry" 
          plate="ABC-1234" 
          styles={styles} 
        />

        {/* Title */}
        <Text style={styles.summaryTitle}>{t('preTripSummary')}</Text>
        <Text style={styles.disclaimerText}>{t('common:date')}: {new Date().toLocaleDateString()}</Text>
        {/* Summary Grid */}
        <TripSummaryGrid />

        {/* Subtotal & Payment */}
        <View style={styles.footerRow}>
          <View>
            <Text style={styles.subtotalLabel}>{t('subtotal')}</Text>
            <Text style={styles.subtotalValue}>$24.50</Text>
          </View>
          <View style={styles.paymentMethod}>
            <Text style={styles.paymentText}>{t('common:payment.cash')}</Text>
          </View>
        </View>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimerText}>{t('finalPriceDisclaimer')}</Text>
        </View>
      </BaseBottomSheet>

      <TripEndedModal
        visible={vm.isBillVisible}
        onConfirmPayment={() => {
            vm.setIsReviewVisible(true);
            vm.setIsBillVisible(false);
          }}
      />

      <ReviewModal 
        visible={vm.isReviewVisible} 
        onClose={() => {
          vm.setIsReviewVisible(false)
          onTripEnded();
        }} 
        onSubmit={(rating, review) => {
          console.log(rating, review);
          vm.setIsReviewVisible(false);
          vm.handleSubmit();
          onTripEnded();
        }}
      />
    </>
  );
}