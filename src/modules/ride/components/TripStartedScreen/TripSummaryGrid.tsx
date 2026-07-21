import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../../../shared/components/Input';
import {useTripStartedViewModel} from '../../viewmodels/useTripStartedViewModel'
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/trip.styles';
import { useTranslation } from 'react-i18next';

export const TripSummaryGrid = () => {

  const { colors } = useTheme();
  const styles = createStyles(colors);
  const vm = useTripStartedViewModel();

  const { t } = useTranslation(['rideStarted', 'common']);

  return(
  <View style={styles.gridContainer}>
    {/* Left Column */}
    <View style={styles.column}>
      {[t('common:estimated'), t('baseFare'), t('distance')].map((label) => (
        <View key={label} style={styles.metricCard}>
          <Text style={styles.metricLabel}>{label}</Text>
          <Text style={styles.metricValue}>...</Text>
        </View>
      ))}
    </View>

    {/* Vertical Divider */}
    <View style={styles.verticalDivider} />

    {/* Right Column */}
    <View style={styles.column}>
      <Text style={styles.tipLabel}>{t('addTip')}</Text>

      <Input
      value={vm.tip}
      placeholder="0.00"
      onChangeText={vm.setTip}
      inputBoxStyle={styles.tipInput}
      inputStyle={styles.tipValue}
      
    />

      <Text style={styles.delayLabel}>{t('potentialDelay')}</Text>

      <View style={styles.delayBox}>
        <Text style={styles.delayValue}>+$2.50</Text>
      </View>
    </View>
  </View>
  )
};