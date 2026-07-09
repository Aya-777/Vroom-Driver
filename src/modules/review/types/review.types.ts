export interface ReviewModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (rating: number, review: string) => void;
}

export interface RatingStarsProps {
  rating: number;
  onChange: (rating: number) => void;
}

export interface ReviewActionsProps {
  onCancel: () => void;
  onSubmit: () => void;
  loading?: boolean;
}

export interface ReviewInputProps {
  value: string;
  onChangeText: (text: string) => void;
}