import React, { useMemo } from 'react';
import { createStyles } from '../../styles/takeRide.styles.ts';
import { useTheme } from '../../../../core/theme/useTheme.ts';
import { BaseBottomSheet } from '../../../../shared/components/BaseBottomSheet';
import RiderStatus from './RiderStatus.tsx';
import RiderAvatar from './RiderAvatar.tsx';
import CommunicationActions from './CommunicationActions.tsx';
import ProgressBar from './ProgressBar.tsx';
import { useTranslation } from 'react-i18next';
import { useTakeRideViewModel } from '../../viewmodels/useTakeRideViewModel.ts';


type Props = {
  onTakeTrip: () => void;
};

export default function TakeRideSheet({ onTakeTrip }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['driverFound', 'common']);

  const { rider, handleBackPress } = useTakeRideViewModel();

  const snapPoints = useMemo(() => ['30%', '70%'], []);

  return (
    <BaseBottomSheet isVisible={true} snapPoints={snapPoints} index={1}>

      <RiderAvatar uri={rider.avatar} styles={styles} />

      <RiderStatus text={t(rider.name)} styles={styles} />

      <CommunicationActions styles={styles} colors={colors} />

      <ProgressBar styles={styles} colors={colors} />
    </BaseBottomSheet>
  );
}
