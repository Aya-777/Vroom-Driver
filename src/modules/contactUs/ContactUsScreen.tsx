import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  Spacing,
  Typography,
} from '../../core/theme/tokens';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../core/theme/useTheme';
import Header from '../../shared/components/SubHeader';
import LinearBg from '../../shared/components/LinearBg';
import { useNavigation } from '@react-navigation/native';
import { tripApi } from '../ride/services/tripApi';

export const ContactUsScreen = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
  if (!message.trim()) {
    console.log('Message is empty');
    return;
  }

  try {
    console.log('Sending message:', message);

    const response = await tripApi.contactUS(message.trim());

    console.log('Message sent:', response);

    setMessage('');
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};

    const { colors } = useTheme();
    const { t } = useTranslation(['contactUs', 'common']);
    const navigation = useNavigation<any>();
    

  return (
    <>
      {/* Header */}
      <Header title={t('contactUs.title')} onBackPress={() => navigation.goBack()} />

      <LinearBg 
      colors={[colors.backgroundSoft, colors.background]}
      style={styles.scrollContent}
      >
        {/* Title & Subtitle */}
        <View style={styles.titleContainer}>
          <Text style={[Typography.h2, { color: colors.textPrimary, textAlign: 'center' }]}>
            {t('contactUs.subTitle')}
          </Text>
          <Text style={[Typography.caption, { color: colors.textMuted, textAlign: 'center', marginTop: Spacing.xs }]}>
            {t('contactUs.message')}
          </Text>
        </View>

        {/* Message Form Card */}
        <View style={[styles.card, { backgroundColor: colors.backgroundSoft, borderColor: colors.border }]}>
          <Text style={[Typography.semiBoldCaption, { color: colors.textPrimary, marginBottom: Spacing.sm }]}>
            {t('contactUs.inputTitle')}
          </Text>
          <TextInput
            style={[
              styles.textInput,
              {
                backgroundColor: colors.surface,
                color: colors.textSecondary,
                borderColor: colors.border,
              },
              Typography.body,
            ]}
            placeholder={t('contactUs.inputholder')}
            placeholderTextColor={colors.textMuted}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={handleSendMessage}
            activeOpacity={0.8}
          >
            <Text style={[Typography.semiBoldBody, { color: colors.background }]}>
              {t('contactUs.sendButton')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer Links & Copyright */}
        <View style={styles.footerContainer}>
          <Text style={[Typography.smallCaption, { color: colors.textMuted, textAlign: 'center', marginTop: Spacing.sm }]}>
            © 2024 {t('contactUs.footer')}
          </Text>
        </View>
      </LinearBg>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  scrollContent: {
    flex: 1,
    paddingTop: 30,
  },
  titleContainer: {
    marginBottom: Spacing.xxl,
    alignItems: 'center',
  },
  card: {
    borderRadius: Spacing.md,
    borderWidth: 1,
    padding: Spacing.md,
    marginBottom: Spacing.lg,
  },
  textInput: {
    borderRadius: Spacing.sm,
    borderWidth: 1,
    padding: Spacing.smm,
    height: 110,
    marginBottom: Spacing.md,
  },
  button: {
    borderRadius: Spacing.xxl,
    paddingVertical: Spacing.smm,
    alignItems: 'center',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: Spacing.md,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  contactDetails: {
    flex: 1,
  },
  footerContainer: {
    marginTop: Spacing.xl,
    alignItems: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: Spacing.xs,
  },
});