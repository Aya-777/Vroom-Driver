import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/home.styles';
import ActionButton from '../../../shared/components/ActionButton';

import History from '../../../assets/svg/common/history.svg';
import Support from '../../../assets/svg/home/ForYouStar.svg';
import { useTranslation } from 'react-i18next';

type Props = {
  onHistoryPress: () => void;
  onSupportPress: () => void;
}

export const ActionButtons = ({onHistoryPress, onSupportPress} : Props) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation(['home']);

  return (
    <View style={styles.actionButtonsRow}>
      <View style={styles.actionButtonContainer}>
        <ActionButton title={t('history')}
        onPress={onHistoryPress} 
        icon={<History width={18} height={18} fill={colors.backgroundSoft} />}
        />
      </View>


      <View style={styles.actionButtonContainer}>
        <ActionButton title={t('support')}
         onPress={onSupportPress} 
         icon={<Support width={18} height={18} fill={colors.backgroundSoft}/>}
         />
      </View>
    </View>
  );
};
