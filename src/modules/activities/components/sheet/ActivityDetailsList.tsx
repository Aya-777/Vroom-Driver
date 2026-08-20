import { ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function ActivityDetailsList({ activity, styles }: any) {
  const { t } = useTranslation(['activities']);

  const intermediateStops = (activity.stops ?? []).filter(
    (stop: any) => stop.stop_type === 'STOP',
  );

  const statusColor =
    activity.displayStatus === 'Completed'
      ? '#2E9B5B'
      : activity.displayStatus === 'Cancelled'
        ? '#D4AF37'
        : activity.displayStatus === 'Rejected'
          ? '#D64545'
          : '#E88919';

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <Text style={styles.title}>{t('activityDetails.title')}</Text>

      <View>
        <View style={styles.row}>
          <Text style={styles.label}>{t('activityDetails.riderName')}</Text>
          <Text style={styles.value}>{activity.riderName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t('activityDetails.rideType')}</Text>
          <Text style={styles.value}>{activity.rideType}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t('activityDetails.status')}</Text>
          <Text style={[styles.value, { color: statusColor }]}>
            {activity.displayStatus}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t('activityDetails.date')}</Text>
          <Text style={styles.value}>{activity.date}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>{t('activityDetails.distance')}</Text>
          <Text style={styles.value}>
            {activity.distance !== null
              ? `${Number(activity.distance).toFixed(3)} km`
              : '-'}
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

      <Text style={styles.sectionTitle}>
        {t('activityDetails.pickupLocation')}
      </Text>
      <Text style={styles.location}>{activity.pickupLocation}</Text>

      {intermediateStops.map((stop: any, index: number) => (
        <View key={`${stop.id ?? stop.order}-${index}`}>
          <Text style={styles.sectionTitle}>
            {t('activityDetails.stop')} {index + 1}
          </Text>
          <Text style={styles.location}>{stop.address}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>
        {t('activityDetails.dropoffLocation')}
      </Text>
      <Text style={styles.location}>{activity.dropoffLocation}</Text>
    </ScrollView>
  );
}