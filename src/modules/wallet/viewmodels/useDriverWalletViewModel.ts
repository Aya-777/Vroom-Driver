import { useCallback, useEffect, useState } from 'react';
import { walletApi } from '../services/walletApi';
import {
  DriverWalletBalance,
  DriverWalletTransaction,
} from '../types/wallet.types';
export function useDriverWalletViewModel() {
  const [balance, setBalance] = useState<DriverWalletBalance | null>(null);
  const [transactions, setTransactions] = useState<DriverWalletTransaction[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(false);
    try {
      const [nextBalance, nextTransactions] = await Promise.all([
        walletApi.getBalance(),
        walletApi.getTransactions(),
      ]);
      setBalance(nextBalance);
      setTransactions(nextTransactions);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);
  return { balance, transactions, isLoading, error, refresh };
}
