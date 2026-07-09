import React from 'react';
import LinearBg from '../../../../shared/components/LinearBg';
import { ThemeColors } from '../../../../core/theme/theme.types';
import { createStyles } from '../../styles/activityDetails.styles';

export default function SheetBackground({ colors }: { colors: ThemeColors }) {

    const styles = createStyles(colors);

    return (
        <LinearBg
            colors={[colors.backgroundSoft, colors.background]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.sheetBackground}
        />
    );
}