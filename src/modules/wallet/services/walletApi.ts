import { apiClient } from '../../../core/network/apiClient';

type Envelope<T> = { data?: T };
type BalanceDto = {
  balance?: string | number;
  currency?: string;
  wallet_type?: string;
};
type TransactionDto = {
  id: string | number;
  type?: string;
  amount?: string | number;
  status?: string;
  created_at: string;
  description?: string;
};
type Page<T> = { results?: T[] };
const unwrap = <T>(value: T | Envelope<T>): T =>
  value && typeof value === 'object' && 'data' in value
    ? ((value as Envelope<T>).data as T)
    : (value as T);
const normalizeType = (value?: string) =>
  String(value ?? '')
    .toLowerCase()
    .replace(/[-\s]+/g, '_');
export const walletApi = {
  async getBalance() {
    const response = await apiClient.get<BalanceDto | Envelope<BalanceDto>>(
      '/payments/wallet/',
    );
    const data = unwrap(response.data);
    return { balance: Number(data?.balance ?? 0), currency: '$' };
  },
  async getTransactions() {
    const response = await apiClient.get<
      | TransactionDto[]
      | Page<TransactionDto>
      | Envelope<TransactionDto[] | Page<TransactionDto>>
    >('/payments/wallet/transactions/');
    const data = unwrap(response.data);
    const rows = Array.isArray(data) ? data : data?.results ?? [];
    return rows.map(item => ({
      id: item.id,
      type: normalizeType(item.type),
      amount: Number(item.amount ?? 0),
      status: item.status,
      createdAt: item.created_at,
      description: item.description,
    }));
  },
};
