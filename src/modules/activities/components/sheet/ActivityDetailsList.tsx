import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function ActivityDetailsList({ activity, styles }: any) {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
        >
            <Text style={styles.title}>Trip Details</Text>

            <View>
                <View style={styles.row}>
                    <Text style={styles.label}>Vehicle</Text>
                    <Text style={styles.value}>{activity.vehicleType}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Status</Text>
                    <Text style={styles.value}>{activity.status}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Requested</Text>
                    <Text style={styles.value}>{activity.date}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Distance</Text>
                    <Text style={styles.value}>{activity.distance} km</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Duration</Text>
                    <Text style={styles.value}>{activity.duration}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Price</Text>
                    <Text style={styles.value}>{activity.price} $</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Pickup</Text>
            <Text style={styles.location}>{activity.pickupLocation}</Text>

            <Text style={styles.sectionTitle}>Destination</Text>
            <Text style={styles.location}>{activity.dropoffLocation}</Text>
        </ScrollView>
    );
}