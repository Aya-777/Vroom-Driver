import { Camera, Map, UserLocation, CameraRef } from '@maplibre/maplibre-react-native';
import { createStyles } from '../../styles/shared.styles';
import { useTheme } from '../../../../core/theme/useTheme';
import React from 'react';
import { View } from 'react-native';
import useMapViewModel from '../../viewmodels/useMapViewModel';
import { useRef } from 'react';

export const MapContainer = () => {

  const { colors } = useTheme();
  const styles = createStyles(colors);
  const vm = useMapViewModel();
  const cameraRef = useRef<CameraRef>(null);

  const animateCamera = () => {
    (cameraRef.current as any)?.setCamera({
      centerCoordinate: vm.location ?? [31.2357, 30.0444],
      zoomLevel: 15,
      animationDuration: 1000,
    });
  };

  return (
    <View style={styles.mapContainer}>
      <Map
        style={styles.map}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=get_your_own_D6rA4zTHduk6KOKTXzGB"
      >
        <Camera
          ref={cameraRef}
          center={vm.location ?? [31.2357, 30.0444]}
          zoom ={15}
        />

        <UserLocation
        />
      </Map>
    </View>
  );
};
