import React from 'react';
import LinearBg from './LinearBg';
import { ThemeColors } from '../../core/theme/theme.types';
import { createStyles } from '../styles/sheet.styles';
import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';

type Props = BottomSheetBackgroundProps & { colors: ThemeColors };

export default function SheetBackground({ colors, style }: Props) {
  const styles = createStyles(colors);

  return (
    <LinearBg
      colors={[colors.backgroundSoft, colors.surface]}
      style={[style, styles.sheetBackground]}
    />
  );
}