import React, { useEffect, useMemo } from 'react';
import { useTheme } from '../../../../core/theme/useTheme';
import { BaseBottomSheet } from '../../../../shared/components/BaseBottomSheet';
import { useDriverFoundViewModel } from '../../viewmodels/useDriverFoundViewModel';
import { createStyles } from '../../styles/driver.styles';
import DriverStatus from './DriverStatus';
import DriverAvatar from './DriverAvatar';
import CommunicationActions from './CommunicationActions';
import CarDetailsCard from './CarDetailsCard';
import ProgressBar from './ProgressBar';
import { useTranslation } from 'react-i18next';

type Props = {
  onDriverFound: () => void;
};

export default function DriverFoundSheet({ onDriverFound }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['driverFound', 'common']);

  const { driver, handleBackPress } = useDriverFoundViewModel();

  const snapPoints = useMemo(() => ['30%', '70%'], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onDriverFound();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BaseBottomSheet isVisible={true} snapPoints={snapPoints} index={1}>
      <DriverStatus text={t(driver.onTheWayMessage)} styles={styles} />

      <DriverAvatar uri={driver.avatar} styles={styles} />

      <DriverStatus text={t(driver.name)} styles={styles} />

      <CommunicationActions styles={styles} colors={colors} />

      <ProgressBar styles={styles} colors={colors} />

      <CarDetailsCard driver={driver} styles={styles} colors={colors} />
    </BaseBottomSheet>
  );
}
