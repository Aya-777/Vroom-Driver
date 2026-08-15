import React from 'react';
import { View, Image, Text } from 'react-native';
import { TripStage } from '../../types/trip.types';
import PinBoxes from './PinBoxes';
import Input from '../../../../shared/components/Input';
import CommunicationActions from '../shared/CommunicationActions';
import DotDivider from '../../../../shared/components/DotDivider';
import { useTheme } from '../../../../core/theme/useTheme';
import { createStyles } from '../../styles/trip.styles';
import { useTranslation } from 'react-i18next';

type Props = {
    stage: TripStage | null;
    riderName: string;
    riderAvatar?: string;
    pin: string;
    pinError: boolean;
    onChangePin: (v: string) => void;
    timerText: string;
};

export default function RiderInfoHeader({
    stage,
    riderName,
    riderAvatar,
    pin,
    pinError,
    onChangePin,
    timerText,
}: Props) {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    const { t } = useTranslation('trip');

    const showRiderCard = stage === TripStage.DETAILS || stage === TripStage.EN_ROUTE;

    return (
        <View style={styles.riderHeader}>
            {showRiderCard ? (
                <>
                    <View style={styles.avatarCircle}>
                        {riderAvatar ? (
                            <Image source={{ uri: riderAvatar }} style={styles.avatarImage} />
                        ) : (
                            <View style={styles.avatarPlaceholder} />
                        )}
                    </View>

                    <Text style={styles.riderName}>{riderName}</Text>

                    <CommunicationActions styles={styles} colors={colors} />
                </>
            ) : stage === TripStage.PIN_ENTRY ? (
                <>
                    <Text style={styles.pinHint}>{t('enterPin')}</Text>
                                        <Input
                      value={pin}
                      onChangeText={value => onChangePin(value.replace(/[^0-9]/g, ''))}
                      keyboardType="number-pad"
                      maxLength={4}
                      placeholder={t('enterPin')}
                      error={pinError ? 'invalidOtp' : undefined}
                      autoFocus
                      autoComplete="sms-otp"
                      textContentType="oneTimeCode"
                      inputBoxStyle={styles.pinInputBox}
                      inputStyle={styles.pinInput}
                    />
                </>
            ) : (
                <PinBoxes length={4} value={timerText} editable={false} />
            )}

            <DotDivider />
        </View>
    );
}
