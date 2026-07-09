import React from 'react';
import {
  View,
} from 'react-native';
import Input from '../../../../shared/components/Input';

import { useTheme } from '../../../../core/theme/useTheme';

import { createStyles } from '../../styles/selectRide.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  fromLocation: string;
  toLocation: string;
  onChangeFrom: (text: string) => void;
  onChangeTo: (text: string) => void;
  errors: {
    fromLocation?: string;
    toLocation?: string;
  };
};

export default function RideLocationInputs({
  fromLocation,
  toLocation,
  onChangeFrom,
  onChangeTo,
  errors
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['selectRide']);
  
  return (
    <View style={styles.inputCard}>
      <View style={styles.inputTimeline}>
        <View style={styles.timelineDot} />

        <View style={styles.timelineLine} />

        <View style={styles.timelineDot} />
      </View>

      <View style={styles.inputContainer}>
        <Input
          inputStyle={styles.input}
          placeholder={t('from')}
          placeholderTextColor={colors.textMuted}
          value={fromLocation}
          onChangeText={onChangeFrom}
          error={errors.fromLocation}
        />

        <View style={styles.divider} />

        <Input
          inputStyle={styles.input}
          placeholder={t('to')}
          placeholderTextColor={colors.textMuted}
          value={toLocation}
          onChangeText={onChangeTo}
          error={errors.toLocation}
        />
      </View>
    </View>
  );
}