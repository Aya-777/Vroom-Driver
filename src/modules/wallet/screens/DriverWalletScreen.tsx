import { ActivityIndicator, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../core/theme/useTheme';
import { useCurrentUser } from '../../../core/store/userStore';
import SubHeader from '../../../shared/components/SubHeader';
import LinearBg from '../../../shared/components/LinearBg';
import { useDriverWalletViewModel } from '../viewmodels/useDriverWalletViewModel';
import DriverTransactionWheel from '../components/DriverTransactionWheel';
import { createWalletStyles } from '../styles/wallet.styles';
export default function DriverWalletScreen({ navigation }: any) {
  const { t } = useTranslation('wallet'); const { colors } = useTheme(); const styles = createWalletStyles(colors); const user: any = useCurrentUser();
  const { balance, transactions, isLoading, error, refresh } = useDriverWalletViewModel();
  const holderName = [user?.first_name, user?.last_name].filter(Boolean).join(' ') || '-'; const walletIdentifier = String(user?.id ?? 0).padStart(4, '0').slice(-4);
  return <LinearBg colors={[colors.backgroundSoft, colors.background]} style={styles.screen}><SubHeader title={t('title')} onBackPress={() => navigation.goBack()} /><View style={styles.content}><LinearBg colors={[colors.surfaceAccent, colors.backgroundSoft]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.walletCard}><Text style={styles.cardLabel}>{t('balance')}</Text><Text style={styles.balanceAmount}>{balance ? `${balance.balance.toFixed(2)} $` : '0.00 $'}</Text><View style={styles.cardFooter}><View><Text style={styles.cardMeta}>{t('cardHolder')}</Text><Text style={styles.cardName}>{holderName}</Text><Text style={styles.cardNumber}>{`VROOM **** **** **** ${walletIdentifier}`}</Text></View><Text style={styles.cardBrand}>VROOM</Text></View></LinearBg><Text style={styles.sectionTitle}>{t('recentTransactions')}</Text>{isLoading ? <View style={styles.stateContainer}><ActivityIndicator color={colors.primary} /><Text style={styles.stateText}>{t('loading')}</Text></View> : error ? <View style={styles.stateContainer}><Text style={styles.stateText}>{t('loadError')}</Text></View> : transactions.length ? <DriverTransactionWheel transactions={transactions} /> : <View style={styles.stateContainer}><Text style={styles.stateTitle}>{t('emptyTitle')}</Text><Text style={styles.stateText}>{t('emptyMessage')}</Text></View>}</View></LinearBg>;
}
