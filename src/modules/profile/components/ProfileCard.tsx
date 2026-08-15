import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { useTheme } from '../../../core/theme/useTheme';
import { createStyles } from '../styles/profile.styles';
import { useTranslation } from 'react-i18next';
import AnimatedDivider from './AnimatedDivider';
import EditIcon from '../../../assets/svg/common/edit.svg';
import CallIcon from '../../../assets/svg/contact/call.svg';
import ArrowLeftIcon from '../../../assets/svg/arrows/arrowLeft.svg';
import RideIcon from '../../../assets/svg/common/ride.svg';
import PasswordIcon from '../../../assets/svg/common/password.svg';
import BirthDate from '../../../assets/svg/profile/cake.svg';

type Props = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  profileImage?: string | null;
  isLoading?: boolean;
  onEditPress?: () => void;
  driverStatus?: string;
  nationalId?: string;
  birthdate?: string;
};

export default function ProfileCard({
  firstName,
  lastName,
  phone,
  profileImage,
  isLoading,
  onEditPress,
  driverStatus,
  nationalId,
  birthdate,
}: Props) {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation('profile');

  const [expanded, setExpanded] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const hasDriverInfo = Boolean(driverStatus || nationalId || birthdate);

  const toggleExpanded = () => {
    const next = !expanded;
    setExpanded(next);
    Animated.timing(rotateAnim, {
      toValue: next ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-90deg'],
  });

  const fullName = isLoading
    ? '...'
    : [firstName, lastName].filter(Boolean).join(' ') || '—';

  return (
    <View style={styles.profileCard}>
      <TouchableOpacity style={styles.editButton} onPress={onEditPress} disabled={!onEditPress}>
        <EditIcon fill={colors.background} />
      </TouchableOpacity>

      {hasDriverInfo && (
        <TouchableOpacity style={styles.expandButton} onPress={toggleExpanded} hitSlop={10}>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <ArrowLeftIcon fill={colors.background} width={20} height={20} />
          </Animated.View>
        </TouchableOpacity>
      )}

      <View style={styles.profileTopRow}>
        <View style={styles.avatarContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.avatarPlaceholder} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <View style={styles.avatarHead} />
              <View style={styles.avatarBody} />
            </View>
          )}
        </View>

        <View style={styles.verticalDivider}>
          <View style={styles.dotIndicator} />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.userName}>{fullName}</Text>

          <View style={styles.iconText}>
            <CallIcon width={18} height={18} fill={colors.primary} />
            <Text style={styles.infoText}>{isLoading ? '...' : phone || '—'}</Text>
          </View>
        </View>
      </View>

      {expanded && hasDriverInfo && (
        <>
          <AnimatedDivider />
          <View >
            {driverStatus && (
              <View style={styles.expandedRow}>
                <RideIcon width={18} height={18} fill={colors.primary} />
                <Text style={styles.infoText}> Status :</Text>
                <Text style={styles.infoText}>
                  {t(`driverStatuses.${driverStatus}`, { defaultValue: driverStatus })}
                </Text>
              </View>
            )}

            {nationalId && (
              <View style={styles.expandedRow}>
                <PasswordIcon width={18} height={18} fill={colors.primary} />
                <Text style={styles.infoText}> National ID :</Text>
                <Text style={styles.infoText}>{nationalId}</Text>
              </View>
            )}

            {birthdate && (
              <View style={styles.expandedRow}>
                <BirthDate width={18} height={18} fill={colors.primary} />
                <Text style={styles.infoText}> Birth Date :</Text>
                <Text style={styles.infoText}>{birthdate}</Text>
              </View>
            )}
          </View>
        </>
      )}
    </View>
  );
}