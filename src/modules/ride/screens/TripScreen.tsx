import React, { useMemo } from 'react';
import { View, StatusBar } from 'react-native';
import Header from '../../../shared/components/SubHeader';
import { BaseBottomSheet } from '../../../shared/components/BaseBottomSheet';
import { MapContainer } from '../components/shared/MapContainer';
import RiderInfoHeader from '../components/TripScreen/RiderInfoHeader';
import TripDetailsGrid from '../components/TripScreen/TripDetailsGrid';
import ActionButton from '../../../shared/components/ActionButton';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/trip.styles';
import { useTranslation } from 'react-i18next';
import { useTripViewModel } from '../viewmodels/useTripViewModel';
import { TripStage } from '../types/trip.types';

type Props = {
    onBackPress?: () => void;
    onTripCompleted?: () => void;
};

export default function TripScreen({ onBackPress, onTripCompleted }: Props) {
    const { colors, mode } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation(['trip', 'common']);

    const vm = useTripViewModel(() => onTripCompleted?.());

    const snapPoints = useMemo(() => ['30%', '70%'], []);

    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
            />

            <Header title={t('common:trip')} onBackPress={() => onBackPress?.()} />

            <MapContainer />

            <BaseBottomSheet isVisible snapPoints={snapPoints} index={1}>
                <RiderInfoHeader
                    stage={vm.stage}
                    riderName="Alex Rider"
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

                <TripDetailsGrid />

                {vm.stage === TripStage.DETAILS && (
                    <ActionButton onPress={vm.takeTrip} title={t('takeTheTrip')} style={styles.primaryButton} />
                )}

                {vm.stage === TripStage.EN_ROUTE && (
                    <ActionButton onPress={vm.cancelTrip} title={t('cancelTheTrip')} style={styles.dangerButton} />
                )}
            </BaseBottomSheet>
        </View>
    );
}