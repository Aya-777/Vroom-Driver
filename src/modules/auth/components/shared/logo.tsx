import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme';
import LinearBg from '../../../../shared/components/LinearBg';
import Profile from '../../../../assets/svg/profile/profile.svg';

type LogoProps = {
  type?: 'login' | 'signup';
};

const Logo = ({ type = 'login' }: LogoProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <LinearBg style={styles.logoCircle}
      colors={[ '#DDD8F0', '#0F1E52' + '50']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {type === 'login' ? (
        <Image
          source={require('../../../../assets/images/logo.png')}
          style={styles.logo  }
          resizeMode="contain"
        />
      ) : (
        <Profile
          width={50}
          height={50}
          fill='#1E2749'
        />
      )}
    </LinearBg>
  );
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    logoCircle: {
      width: 90,
      height: 90,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderWidth: 4,
      borderColor: colors.border,
    },
    logo: {
      width: 90,
      height: 90,
    },
  });

export default Logo;