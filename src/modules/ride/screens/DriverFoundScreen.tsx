import React, { useMemo } from 'react';
import { View, StatusBar } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import {BaseBottomSheet} from '../../../shared/components/BaseBottomSheet';
import Header from '../../../shared/components/SubHeader';
import { useDriverFoundViewModel } from '../viewmodels/useDriverFoundViewModel';
import { createStyles } from '../styles/driver.styles';
import DriverStatus from '../components/DriverFoundScreen/DriverStatus';
import DriverAvatar from '../components/DriverFoundScreen/DriverAvatar';
import CommunicationActions from '../components/DriverFoundScreen/CommunicationActions';
import CarDetailsCard from '../components/DriverFoundScreen/CarDetailsCard';
import ProgressBar from '../components/DriverFoundScreen/ProgressBar';
import { useTranslation } from 'react-i18next';

export default function DriverFoundScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const {t} = useTranslation(['driverFound', 'common']);

  const { driver, handleBackPress } = useDriverFoundViewModel();

  const snapPoints = useMemo(() => ['30%', '70%'], []);

  return (
    <View style={styles.contentContainer}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title={t('common:trackYourTrip')} onBackPress={handleBackPress} />

      <BaseBottomSheet
        isVisible={true}
        snapPoints={snapPoints}
        index={1}
      >
        <DriverStatus text={t(driver.onTheWayMessage)} styles={styles} />

        <DriverAvatar uri={driver.avatar} styles={styles} />

        <DriverStatus text={t(driver.name)} styles={styles} />

        <CommunicationActions styles={styles} colors={colors} />

        <ProgressBar styles={styles} colors={colors} />

        <CarDetailsCard driver={driver} styles={styles} colors={colors} />
      </BaseBottomSheet>
    </View>
  );
}