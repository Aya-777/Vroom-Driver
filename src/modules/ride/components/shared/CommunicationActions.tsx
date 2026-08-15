import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import type { ThemeColors } from '../../../../core/theme/theme.types';

import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
import MessageIcon from '../../../../assets/svg/contact/chat.svg';
import WhatsAppIcon from '../../../../assets/svg/contact/whatsapp.svg';

type CommunicationActionsStyles = {
  communicationRow: ViewStyle;
  iconButton: ViewStyle;
};

type CommunicationActionsProps = {
  styles: CommunicationActionsStyles;
  colors: ThemeColors;
};

export default function CommunicationActions({ styles, colors }: CommunicationActionsProps) {
  return (
    <View style={styles.communicationRow}>
      <TouchableOpacity style={styles.iconButton}>
        <PhoneNumberIcon fill={colors.textPrimary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <MessageIcon fill={colors.textPrimary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <WhatsAppIcon fill={colors.textPrimary} height={26} width={26} />
      </TouchableOpacity>
    </View>
  );
}