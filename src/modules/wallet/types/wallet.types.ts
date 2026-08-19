export type DriverWalletBalance = { balance: number; currency: string };
export type DriverWalletTransaction = {
  id: string | number;
  type: string;
  amount: number;
  status?: string;
  createdAt: string;
  description?: string;
};
