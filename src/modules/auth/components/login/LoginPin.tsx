import React from 'react';
import { View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { useTheme } from '../../../../core/theme/useTheme';
import { PinMask } from './PinShape';
import { createStyles } from '../../styles/login.styles';

const LoginPin = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.wrapper}>
      <MaskedView
        style={styles.flex}
        maskElement={
          <View style={styles.flex}>
            <PinMask />
          </View>
        }
      >
        <View style={styles.background} />
        <View style={styles.content}>{children}</View>
      </MaskedView>
    </View>
  );
};

export default LoginPin;

