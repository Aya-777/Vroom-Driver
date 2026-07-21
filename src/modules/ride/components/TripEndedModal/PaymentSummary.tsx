import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../../../shared/components/Input';
import { createStyles } from '../../styles/tripEndedModal.styles';
import { useTheme } from '../../../../core/theme/useTheme';
import { useTripStartedViewModel } from '../../viewmodels/useTripStartedViewModel';
import { useTranslation } from 'react-i18next';

export default function PaymentSummary() {
  const vm = useTripStartedViewModel();
  
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['tripEnded', 'common']);
  
  return (
    <View style={styles.paymentColumn}>
      <View style={styles.metricRow}>
        <Text style={styles.label} adjustsFontSizeToFit={true}>
          {t('tripEnded.payment.addTip')}
        </Text>
        <View>
          <Input
            value={vm.tip}
            inputBoxStyle={styles.tipInput}
            inputStyle={styles.tipText}
            keyboardType="decimal-pad"
            onChangeText={vm.setTip}
          />
        </View>
      </View>

      <View style={styles.metricRow}>
        <Text style={styles.label} adjustsFontSizeToFit={true}>
          {t('tripEnded.payment.delay')}
        </Text>
        <Text style={styles.valueText} adjustsFontSizeToFit={true}>
          $2.50
        </Text>
      </View>
    </View>
  );
}
