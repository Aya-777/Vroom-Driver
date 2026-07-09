import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/signup.styles';
import { useTranslation } from 'react-i18next';

const SignupFooter = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['auth']);

  return (
    <View style={styles.footerContainer}>
      <Text
        style={[
          styles.footerText,
          { color: colors.textMuted },
        ]}
      >
        {t('byContinuing')}
      </Text>

      <View style={styles.linksRow}>
        <TouchableOpacity>
          <Text
            style={[
              styles.footerLink,
              { color: colors.primary },
            ]}
          >
            {t('terms')}
          </Text>
        </TouchableOpacity>

        {/* <Text
          style={[
            styles.footerText,
            { color: colors.textMuted },
          ]}
        >
          {' '}and{' '}
        </Text>

        <TouchableOpacity>
          <Text
            style={[
              styles.footerLink,
              { color: colors.primary },
            ]}
          >
            Privacy Policy
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default SignupFooter;