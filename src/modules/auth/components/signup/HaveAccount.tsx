import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/signup.styles';
import { useTranslation } from 'react-i18next';

type Props = {
  onLoginPress?: () => void;
};

const SignupLoginFooter = ({ onLoginPress }: Props) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['auth']);

  return (
    <View style={styles.footerContainer}>
      <View style={styles.linksRow}>
        <Text
          style={[
            styles.footerText,
            { color: colors.textMuted },
          ]}
        >
          {t('alreadyHaveAccount')}{' '}
        </Text>

        <TouchableOpacity onPress={onLoginPress}>
          <Text
            style={[
              styles.footerLink,
              { color: colors.primary },
            ]}
          >
            {t('login')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupLoginFooter;