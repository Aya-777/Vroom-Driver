import React from 'react';
import { View, Text } from 'react-native';
import { createStyles } from '../../styles/tripEndedModal.styles';
import { useTheme } from '../../../../core/theme/useTheme';
import { useTranslation } from 'react-i18next';


export default function TripMetrics() {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['tripEnded', 'common']);
  
  const metrics = [
    { label: 'common:payment.estimatedPrice', value: '0' },
    { label: 'common:filters.acceptAnimals', value: '0' },
    { label: 'common:filters.noSmoking', value: '0' },
    { label: 'common:filters.airConditioner', value: '0' },
  ];

  return (
    <View style={styles.metricsColumn}>
      {metrics.map((item, index) => (
        <View key={index} style={styles.metricRow}>
          <Text style={styles.metricLabel} adjustsFontSizeToFit={true}>
            {t(item.label)}:
          </Text>

          <Text style={styles.valueText}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}
