import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../core/theme/useTheme'; 
import LinearBg from '../../../../shared/components/LinearBg';
import DropDownArrowIcon from '../../../../assets/svg/arrows/dropdownArrow.svg';
import ArrowUp from '../../../../assets/svg/arrows/arrowUp.svg';
import FilterIcon from '../../../../assets/svg/ride/filters.svg';
import CashIcon from '../../../../assets/svg/payment/price.svg';
import { useTranslation } from 'react-i18next';

type Props = {
  selectedValue: string;
  isOpen: boolean;
  onToggleDropdown: () => void;
  onSelectPayment: (item: string) => void;
  onFiltersPress?: () => void;
  paymentItems: { key: string; label: string; }[];
  styles: any; 
};

export default function RideActionFilters({
  selectedValue,
  isOpen,
  onToggleDropdown,
  onSelectPayment,
  onFiltersPress,
  paymentItems,
  styles,
}: Props) {
  const { colors } = useTheme();
  const gradientColors = [colors.backgroundSoft, colors.surface];
  const {t} = useTranslation(['rideDetails']);

  return (
    <View style={styles.actionCardsRow}>
      
      <TouchableOpacity
        style={styles.cardWrapper}
        onPress={onFiltersPress || (() => console.log('Filters Pressed'))}
        activeOpacity={0.8}
      >
        <LinearBg colors={gradientColors} style={styles.actionCardGradient}>
          <View style={styles.iconWrapper}>
            <FilterIcon width={18} height={18} fill="#FFFFFF" />
          </View>
          <Text style={styles.cardText}>{t('filters')}</Text>
        </LinearBg>
      </TouchableOpacity>

      <View style={styles.dropdownWrapper}>
        <TouchableOpacity
          style={styles.cardWrapper}
          onPress={onToggleDropdown}
          activeOpacity={0.8}
        >
          <LinearBg colors={gradientColors} style={styles.actionCardGradient}>
            <View style={styles.iconWrapper}>
              <CashIcon width={18} height={18} fill="#FFFFFF" />
            </View>
            <Text style={styles.cardText}>{selectedValue}</Text>
            {isOpen ? (
              <ArrowUp width={12} height={12} fill="#FFFFFF" />
            ) : (
              <DropDownArrowIcon width={12} height={12} fill="#FFFFFF" />
            )}
          </LinearBg>
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.dropdownMenu}>
            {paymentItems.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={styles.menuItem}
                onPress={() => onSelectPayment(item.key)}
              >
                <Text
                  style={[
                    styles.menuItemText,
                    {
                      color:
                        selectedValue === item.label
                          ? colors.primary
                          : colors.textSecondary,
                    },
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

    </View>
  );
}