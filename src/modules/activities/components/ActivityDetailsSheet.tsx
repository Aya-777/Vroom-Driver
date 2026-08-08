import React, { useMemo } from 'react';
import { BaseBottomSheet } from '../../../shared/components/BaseBottomSheet';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/activityDetails.styles';
import ActivityDetailsList from './sheet/ActivityDetailsList';
import ActivityFooterActions from './sheet/ActivityFooterActions';

export default function ActivityDetailsSheet({
  visible,
  activity,
  onClose,
  onReview,
  onReride,
}: any) {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const snapPoints = useMemo(() => ['80%'], []);

  if (!activity) return null;

  return (
    <BaseBottomSheet
      index={1}
      snapPoints={snapPoints}
      isVisible={visible}
      onClose={onClose}
      contentContainerStyle={styles.sheetClip}
      enablePanDownToClose
    >
      <ActivityDetailsList
        activity={activity}
        styles={styles}
        colors={colors}
      />
      <ActivityFooterActions
        styles={styles}
        onReview={onReview}
        onReride={onReride}
      />
    </BaseBottomSheet>
  );
}