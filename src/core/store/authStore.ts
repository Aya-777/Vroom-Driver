import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storageAdapter } from '../../core/storage/storage.adapter';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  actions: {
    login: (token: string) => void;
    logout: () => void;
  };
}

const useAuthStoreInner = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      actions: {
        login: (token) => set({ isLoggedIn: true, token }),
        logout: () => set({ isLoggedIn: false, token: null }),
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: storageAdapter.getItem,
        setItem: storageAdapter.setItem,
        removeItem: storageAdapter.removeItem,
      })),
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        token: state.token,
      }),
    }
  )
);

export const useAuthLoggedIn = () => useAuthStoreInner((state) => state.isLoggedIn);
export const useAuthToken = () => useAuthStoreInner((state) => state.token);
export const useAuthActions = () => useAuthStoreInner((state) => state.actions);