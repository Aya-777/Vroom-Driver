// src/shared/components/DriverInfoCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProfileIcon from '../../../../assets/svg/profile/profile.svg';
import PhoneIcon from '../../../../assets/svg/contact/call.svg';

export const DriverInfoCard = ({ name, rating, car, plate, styles, colors }: any) => (
  <View style={styles.driverCard}>
    <View style={styles.driverInfoContainer}>
      <ProfileIcon width={50} height={50} style={styles.avatar} />
      <View style={styles.driverTextContainer}>
        <Text style={styles.driverName}>{name}</Text>
        <Text style={styles.driverDetails}>{rating} (1,248 rides)</Text>
        <Text style={styles.driverCar}>{car} • {plate}</Text>
      </View>
      <TouchableOpacity style={styles.callButton}>
        <PhoneIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  </View>
);