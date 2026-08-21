import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import type { ThemeColors } from '../../../../core/theme/theme.types';

import PhoneNumberIcon from '../../../../assets/svg/contact/call.svg';
import MessageIcon from '../../../../assets/svg/contact/chat.svg';
import WhatsAppIcon from '../../../../assets/svg/contact/whatsapp.svg';
import { callPhoneNumber, messagePhoneNumber } from '../../utils/conmmunications';

type CommunicationActionsStyles = {
  communicationRow: ViewStyle;
  iconButton: ViewStyle;
};

type CommunicationActionsProps = {
  styles: CommunicationActionsStyles;
  colors: ThemeColors;
  driver_number: string | undefined;
};


export default function CommunicationActions({ styles, colors, driver_number }: CommunicationActionsProps) {
  return (
    <View style={styles.communicationRow}>
      <TouchableOpacity style={styles.iconButton} onPress={() => callPhoneNumber(driver_number)}>
        <PhoneNumberIcon fill={colors.textPrimary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={() => messagePhoneNumber(driver_number)}>
        <MessageIcon fill={colors.textPrimary} />
      </TouchableOpacity>

    </View>
  );
}