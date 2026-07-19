import React from 'react';
import {Text, View} from 'react-native';

import {createStyles} from '../styles/sidebar.styles';
import { useTheme } from '../../../core/theme/useTheme';

type Props = {
  version: string;
};

const SidebarFooter = ({version}: Props) => {

    const { colors } = useTheme();
    const styles = createStyles(colors);
    
  return (
    <View style={styles.footer}>
      <Text style={styles.version}>
        VROOM v{version}
      </Text>
    </View>
  );
};

export default SidebarFooter;