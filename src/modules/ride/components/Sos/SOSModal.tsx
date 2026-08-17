import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/SOSModal.styles';
import { useTranslation } from 'react-i18next';

interface SOSModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => Promise<boolean>;
}

export default function SOSModal({
  visible,
  onCancel,
  onConfirm,
}: SOSModalProps) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['modals', 'common']);

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (!visible) {
      setIsSent(false);
      setIsSending(false);
    }
  }, [visible]);

  const handleConfirm = async () => {
    if (isSending) return;

    setIsSending(true);

    try {
      const success = await onConfirm();

      if (success) {
        setIsSent(true);
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>

          {isSent ? (
            <>
              {/* Success icon */}
              <View style={styles.successIconContainer}>
                <Text style={styles.successIcon}>✓</Text>
              </View>

              <Text style={styles.title}>
                {t('modals:modals.sos.sentTitle')}
              </Text>

              <Text style={styles.message}>
                {t('modals:modals.sos.sentMessage')}
              </Text>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onCancel}
                activeOpacity={0.7}
              >
                <Text style={styles.cancelText}>
                  {t('common:close')}
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.icon}>⚠️</Text>

              <Text style={styles.title}>
                {t('modals:modals.sos.questionTitle')}
              </Text>

              <Text style={styles.message}>
                {t('modals:modals.sos.questionMessage')}
              </Text>

              <TouchableOpacity
                style={styles.sosButton}
                onPress={handleConfirm}
                activeOpacity={0.8}
                disabled={isSending}
              >
                <Text style={styles.sosButtonText}>
                  {isSending ? t('modals:modals.sos.sending') : t('modals:modals.sos.sendSos')}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.cancelButton}
                onPress={onCancel}
                activeOpacity={0.7}
                disabled={isSending}
              >
                <Text style={styles.cancelText}>
                  {t('common:cancel')}
                </Text>
              </TouchableOpacity>
            </>
          )}

        </View>
      </View>
    </Modal>
  );
}