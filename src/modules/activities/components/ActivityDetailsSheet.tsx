import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/activityDetails.styles';
import { useCallback } from 'react';
import ActivityDetailsList from './sheet/ActivityDetailsList';
import ActivityFooterActions from './sheet/ActivityFooterActions';
import SheetBackground from './sheet/SheetBackground';

export default function ActivityDetailsSheet({
  visible,
  activity,
  onClose,
  onReview,
  onReride,
}: any) {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  const renderBackground = useCallback(
    () => <SheetBackground colors={colors} />,
    [colors]
  );

  if (!activity) return null;

  return (
    <BottomSheet
      index={visible ? 0 : -1}
      snapPoints={['70%']}
      enablePanDownToClose
      onClose={onClose}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      backgroundComponent={renderBackground}
    >

      <BottomSheetView style={styles.sheetClip}>
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
      </BottomSheetView>

    </BottomSheet >
  );
}