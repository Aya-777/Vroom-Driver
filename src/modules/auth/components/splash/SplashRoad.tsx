import React from 'react';
import { BlurMask, Canvas, Path } from '@shopify/react-native-skia';
import { SharedValue } from 'react-native-reanimated';
import { useTheme } from '../../../../core/theme/useTheme';

interface SplashRoadProps {
  styles: any;
  roadPath: any;
  customDashPath: any;
  roadProgress: SharedValue<number>;
}

export const SplashRoad = React.memo(({ styles, roadPath, customDashPath, roadProgress }: SplashRoadProps) => {
    const { colors } = useTheme();
  
  return (
    <Canvas style={styles.canvas}>
      <Path
        path={roadPath}
        color="#121F3F"
        style="fill"
        opacity={0.95}
      />

      <Path
        path={roadPath}
        color={colors.primary}
        style="stroke"
        strokeWidth={14}
        end={roadProgress}
        opacity={0.5}
      >
        <BlurMask blur={40} style="normal" />
      </Path>
      <Path
        path={roadPath}
        color='#BFA4F5'
        style="stroke"
        strokeWidth={3}
        end={roadProgress}
      />
      <Path
        path={customDashPath}
        color='#BFA4F5'
        style="fill"
        end={roadProgress}
        opacity={0.8}
      />
    </Canvas>
  );
});