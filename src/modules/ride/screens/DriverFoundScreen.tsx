import React from 'react';
import { View, StatusBar } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import BottomSheetCard from '../../../shared/components/ride/BottomSheetCard';
import Header from '../../../shared/components/SubHeader';
import { useDriverHereViewModel } from '../viewmodels/useDriverHereViewModel';
import { createStyles } from '../styles/DriverFound.styles';
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

  const { driver, handleBackPress } = useDriverHereViewModel();

  return (
    <View style={styles.contentContainer}>
      <StatusBar translucent backgroundColor="transparent" />
      <Header title={t('trackYourTrip')} onBackPress={handleBackPress} />

      <BottomSheetCard>
        <DriverStatus text={driver.statusMessage} styles={styles} />

        <DriverAvatar uri={driver.avatar} styles={styles} />

        <DriverStatus text={driver.name} styles={styles} />

        <CommunicationActions styles={styles} colors={colors} />

        <ProgressBar styles={styles} colors={colors} />

        <CarDetailsCard driver={driver} styles={styles} colors={colors} />
      </BottomSheetCard>
    </View>
  );
}