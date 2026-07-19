import React from 'react';
import { Modal, View, Text } from 'react-native';
import TripMetrics from './TripMetrics';
import PaymentSummary from './PaymentSummary';
import ActionButton from '../../../../shared/components/ActionButton';
import { createStyles } from '../../styles/tripEndedModal.styles';
import { useTheme } from '../../../../core/theme/useTheme';
import LinearBg from '../../../../shared/components/LinearBg';
import { useTranslation } from 'react-i18next';

type Props = {
  visible: boolean;
  onConfirmPayment: () => void;
};

export default function TripEndedModal({ visible, onConfirmPayment }: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['tripEnded', 'common']);
  
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <LinearBg
          colors={[colors.backgroundSoft, colors.background]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0.8 }}
          style={styles.modalContainer}
        >
          <Text style={styles.title}>{t('tripEnded.title')}</Text>
          <Text style={styles.subtitle}>{t('tripEnded.subtitle')}</Text>

          <View style={styles.divider} />

          <Text style={styles.total}>25.50$</Text>

          <View style={styles.divider} />

          <View style={styles.content}>
            <TripMetrics />

            <View style={styles.verticalDivider} />

            <PaymentSummary />
          </View>

          <View style={styles.divider} />

          <ActionButton title={t('tripEnded.confirmPayment')} onPress={onConfirmPayment} />
        </LinearBg>
      </View>
    </Modal>
  );
}
