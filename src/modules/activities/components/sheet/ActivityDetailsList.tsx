import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function ActivityDetailsList({ activity, styles }: any) {
    const { t } = useTranslation(['activities']);

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
        >
            <Text style={styles.title}>{t('activityDetails.title')}</Text>

            <View>
                <View style={styles.row}>
                    <Text style={styles.label}>{t('activityDetails.driverName')}</Text>
                    <Text style={styles.value}>{activity.driverName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>{t('activityDetails.rideType')}</Text>
                    <Text style={styles.value}>{activity.rideType}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>{t('activityDetails.date')}</Text>
                    <Text style={styles.value}>{activity.date}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>{t('activityDetails.distance')}</Text>
                    <Text style={styles.value}>
                        {activity.distance !== null ? `${activity.distance} km` : '-'}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>{t('activityDetails.duration')}</Text>
                    <Text style={styles.value}>
                        {activity.duration !== null ? `${activity.duration} min` : '-'}
                    </Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>{t('activityDetails.price')}</Text>
                    <Text style={styles.value}>
                        {activity.price !== null ? `${activity.price} $` : '-'}
                    </Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>{t('activityDetails.pickupLocation')}</Text>
            <Text style={styles.location}>{activity.pickupLocation}</Text>

            <Text style={styles.sectionTitle}>{t('activityDetails.dropoffLocation')}</Text>
            <Text style={styles.location}>{activity.dropoffLocation}</Text>
        </ScrollView>
    );
}