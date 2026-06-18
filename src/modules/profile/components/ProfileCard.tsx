import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';

import EditIcon from '../../../assets/svg/common/edit.svg';
import CallIcon from '../../../assets/svg/contact/call.svg';
import MailIcon from '../../../assets/svg/contact/mail.svg';
import PinIcon from '../../../assets/svg/common/pin.svg';

export default function ProfileCard() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.profileCard}>

      {/* Edit */}
      <TouchableOpacity style={styles.editButton}>
        <EditIcon fill={colors.background} />
      </TouchableOpacity>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarPlaceholder}>
          <View style={styles.avatarHead} />
          <View style={styles.avatarBody} />
        </View>
      </View>

      {/* Divider */}
      <View style={styles.verticalDivider}>
        <View style={styles.dotIndicator} />
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfo}>

        <Text style={styles.userName}>
          Alex Driver
        </Text>

        <View style={styles.iconText}>
          <CallIcon
            width={18}
            height={18}
            fill={colors.background}
          />

          <Text style={styles.infoText}>
            +1 (555) 012-3456
          </Text>
        </View>

        <View style={styles.iconText}>
          <MailIcon
            width={18}
            height={18}
            fill={colors.background}
          />

          <Text style={styles.infoText}>
            alex.driver@vroom.io
          </Text>
        </View>

        <View style={styles.iconText}>
          <PinIcon
            width={18}
            height={18}
            fill={colors.background}
          />

          <Text style={styles.infoText}>
            Damascus, Jaramana
          </Text>
        </View>

      </View>

    </View>
  );
}