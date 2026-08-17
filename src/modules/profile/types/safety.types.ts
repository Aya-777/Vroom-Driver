import { SvgProps } from 'react-native-svg';

export interface SafetyItem {
  id: string;
  Icon: React.FC<SvgProps>;
  titleKey: string;
  descKey: string;
}

export interface SafetySection {
  id: string;
  titleKey: string;
  items: SafetyItem[];
}
