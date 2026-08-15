import { useTheme } from '../../core/theme/useTheme';
import { createStyles } from '../styles/sheet.styles';
import React, { useCallback, useMemo } from 'react';
import BottomSheet, {
  BottomSheetView,
  BottomSheetProps,
  BottomSheetBackgroundProps,
} from '@gorhom/bottom-sheet';
import { StyleSheet, ViewStyle } from 'react-native';
import SheetBackground from './SheetBackground';

interface BaseBottomSheetProps extends Omit<BottomSheetProps, 'children'> {
  isVisible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
}

export const BaseBottomSheet: React.FC<BaseBottomSheetProps> = ({
  isVisible,
  onClose,
  snapPoints = ['30%', '70%'],
  children,
  contentContainerStyle,
  ...rest
}) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const renderBackground = useCallback(
    (props: BottomSheetBackgroundProps) => <SheetBackground {...props} colors={colors} />,
    [colors],
  );

  const containerStyle = useMemo(
    () =>
      StyleSheet.flatten([
        { paddingHorizontal: 20, paddingVertical: 10 },
        contentContainerStyle,
      ]),
    [contentContainerStyle],
  );

  return (
    <BottomSheet
      index={isVisible ? 0 : -1}
      snapPoints={snapPoints}
      onClose={onClose}
      handleIndicatorStyle={styles.handleIndicatorStyle}
      backgroundStyle={{ backgroundColor: 'transparent' }}
      backgroundComponent={renderBackground}
      {...rest}
    >
      <BottomSheetView style={containerStyle}>{children}</BottomSheetView>
    </BottomSheet>
  );
};