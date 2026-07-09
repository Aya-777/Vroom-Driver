import { ReactNode } from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  icon: ReactNode;
  active?: boolean;
  onPress?: () => void;
}

export interface DestinationItem {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
}