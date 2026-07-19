import React, { useEffect, useMemo, useState } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { BaseBottomSheet } from '../../../shared/components/BaseBottomSheet';
import Header from '../../../shared/components/SubHeader';
import { createStyles } from '../styles/trip.styles';
import { useTranslation } from 'react-i18next';
import { TripSummaryGrid } from '../components/TakeRideScreen/TripSummaryGrid';
import { DriverInfoCard } from '../components/TakeRideScreen/DriverInfoCard';
import { useTakeRideViewModel } from '../viewmodels/useTakeRideViewModel';
import ReviewModal from '../../review/components/ReviewModal';
import TripEndedModal from '../components/TripEndedModal/TripEndedModal';

export default function TakeRideScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['takeRide', 'common']);

  const vm = useTakeRideViewModel();

  useEffect(() => {
    const timer = setTimeout(() => {
      vm.setIsBillVisible(true);
    }, 3000);

    // Cleanup to prevent memory leaks if the user leaves before 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const snapPoints = useMemo(() => ['30%', '70%'], []);

  return (
    <View style={styles.container}>
      <Header
        title={t('common:trackYourTrip')}
        onBackPress={vm.handleBackPress}
      />

      <BaseBottomSheet isVisible={true} snapPoints={snapPoints} index={1}>
        <StatusBar translucent backgroundColor="transparent" />
        <Text style={styles.TakeRideMessage}>{t('TakeRide')}</Text>
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
        <Text style={styles.disclaimerText}>
          {t('common:date')}: {new Date().toLocaleDateString()}
        </Text>
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
          vm.setIsReviewVisible(false);
          vm.handleCloseReviewModal();
        }}
        onSubmit={(rating, review) => {
          console.log(rating, review);
          vm.setIsReviewVisible(false);
          vm.handleSubmit();
        }}
      />
    </View>
  );
}
