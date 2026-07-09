import { ElementType } from 'react';

export type ProfileGridItem = {
  id: string;
  title: string;
  icon: ElementType;
  onPress?: () => void;
};

export type ProfileListItem = {
  id: string;
  title: string;
  icon: ElementType;
  onPress?: () => void;
};

export type UserProfile = {
  name: string;
  phone: string;
  email: string;
  location: string;
};