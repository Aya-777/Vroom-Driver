import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { ThemeColors } from '../../../../core/theme/theme.types';
import type { DriverFoundStyles } from '../../styles/DriverFound.styles';

import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
import MessageIcon from '../../../../assets/svg/contact/chat.svg';
import WhatsAppIcon from '../../../../assets/svg/contact/whatsapp.svg';

type CommunicationActionsProps = {
  styles: DriverFoundStyles;
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

      <TouchableOpacity style={[styles.iconButton, {
          backgroundColor: colors.primary,
          height:35,
          width:35
        }]}>
        <WhatsAppIcon fill={colors.textPrimary} height={24} width={24}/>
      </TouchableOpacity>
    </View>
  );
}