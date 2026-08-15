import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/sidebar.styles';
import ActionButton from '../../../shared/components/ActionButton';
import LogoutIcon from '../../../assets/svg/profile/logout.svg';

type Props = {
  version: string;
  onLogout: () => void;
};

const SidebarFooter = ({ version, onLogout }: Props) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['profile', 'common']);

  return (
    <View style={styles.footer}>
      <ActionButton
        onPress={onLogout}
        title={t('logout')}
        icon={<LogoutIcon fill={colors.error} />}
        style={styles.logoutButton}
        textStyle={styles.logoutText}
      />
      <Text style={styles.version}>VROOM v{version}</Text>
    </View>
  );
};

export default SidebarFooter;
