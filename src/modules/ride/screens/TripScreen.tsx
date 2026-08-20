import React, { useMemo } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Header from '../../../shared/components/SubHeader';
import { BaseBottomSheet } from '../../../shared/components/BaseBottomSheet';
import ActionButton from '../../../shared/components/ActionButton';
import { useTheme } from '../../../core/theme/useTheme';
import { MapContainer } from '../components/shared/MapContainer';
import RiderInfoHeader from '../components/TripScreen/RiderInfoHeader';
import TripDetailsGrid from '../components/TripScreen/TripDetailsGrid';
import { createStyles } from '../styles/trip.styles';
import { useTripViewModel } from '../viewmodels/useTripViewModel';
import { TripStage } from '../types/trip.types';
import { TripId } from '../services/dto/trip.dto';
import SOSModal from '../components/Sos/SOSModal';
import ReviewModal from '../../review/components/ReviewModal';
import { useReview } from '../../review/hooks/useReview';

type Props = {
  tripId: TripId;
  onBackPress?: () => void;
  onTripCompleted?: () => void;
};

export default function TripScreen({
  tripId,
  onBackPress,
  onTripCompleted,
}: Props) {
  const { colors, mode } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['trip', 'common']);
  const [reviewVisible, setReviewVisible] = React.useState(false);
  const { submitReview } = useReview(Number(tripId));
  const vm = useTripViewModel(
    () => setReviewVisible(true),
    tripId,
    () => onBackPress?.(),
  );
  const snapPoints = useMemo(() => ['30%', '70%'], []);
  const riderName =
    [vm.trip?.rider?.first_name, vm.trip?.rider?.last_name]
      .filter(Boolean)
      .join(' ') || 'Rider';

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          hidden
          animated
          barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        />
        <View>
          <Header title={t('common:ride')} onBackPress={onBackPress} />
          <TouchableOpacity
            style={styles.sosButton}
            onPress={() => vm.setSOSVisible(true)}
            activeOpacity={0.8}
          >
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>

        <MapContainer />
        <BaseBottomSheet isVisible snapPoints={snapPoints} index={1}>
          <RiderInfoHeader
            stage={vm.stage}
            riderName={riderName}
            riderAvatar={vm.trip?.rider?.profile_image ?? undefined}
            pin={vm.pin}
            pinError={vm.pinError}
            onChangePin={vm.onChangePin}
            timerText={vm.timerText}
          />

          {vm.stage === TripStage.EN_ROUTE && (
            <ActionButton
              onPress={vm.markArrived}
              title={t('iAmHere')}
              style={styles.secondaryButton}
              textStyle={styles.secondaryButtonText}
            />
          )}

          {vm.stage === TripStage.IN_PROGRESS && (
            <ActionButton
              onPress={vm.completeTrip}
              title={t('complete')}
              style={styles.secondaryButton}
              textStyle={styles.secondaryButtonText}
            />
          )}

          <TripDetailsGrid
            trip={vm.trip}
            vehicleTierInfo={vm.vehicleTierInfo}
          />

          {vm.stage === TripStage.DETAILS && (
            <ActionButton
              onPress={vm.takeTrip}
              title={t('takeTheTrip')}
              style={styles.primaryButton}
            />
          )}

          {(vm.stage === TripStage.EN_ROUTE ||
            vm.stage === TripStage.PIN_ENTRY) && (
            <ActionButton
              onPress={vm.cancelTrip}
              title={t('cancelTheTrip')}
              style={styles.dangerButton}
              textStyle={styles.dangerButtonText}
            />
          )}
        </BaseBottomSheet>
      </View>
      <ReviewModal
        visible={reviewVisible}
        onClose={() => {
          setReviewVisible(false);
          onTripCompleted?.();
        }}
        onSubmit={async (rating, review) => {
          const submitted = await submitReview({ rating, comment: review });
          if (submitted) {
            setReviewVisible(false);
            onTripCompleted?.();
          }
        }}
      />
      {(vm.isSOSVisible || vm.storeSosVisible) && (
        <SOSModal
          visible={vm.isSOSVisible || vm.storeSosVisible}
          onCancel={() => {
            vm.setSOSVisible(false);
            vm.setStoreSosVisible(false);
          }}
          onConfirm={vm.handleSosPress}
        />
      )}
    </>
  );
}

