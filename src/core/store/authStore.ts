import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storageAdapter } from '../../core/storage/storage.adapter';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  refreshToken: string | null;
  deviceTokenId: number | null;
  hasHydrated: boolean;
  actions: {
    login: (token: string, refreshToken?: string) => void;
    setToken: (token: string) => void;
    setDeviceTokenId: (id: number | null) => void;
    logout: () => void;
    setHasHydrated: (value: boolean) => void;
  };
}

const useAuthStoreInner = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      refreshToken: null,
      deviceTokenId: null,
      hasHydrated: false,
      actions: {
        login: (token, refreshToken) =>
          set({ isLoggedIn: true, token, refreshToken: refreshToken ?? null }),
        setToken: (token) => set({ token }),
        setDeviceTokenId: (id) => set({ deviceTokenId: id }),
        logout: () =>
          set({
            isLoggedIn: false,
            token: null,
            refreshToken: null,
            deviceTokenId: null,
          }),
        setHasHydrated: (value) => set({ hasHydrated: value }),
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
        refreshToken: state.refreshToken,
        deviceTokenId: state.deviceTokenId,
      }),
      onRehydrateStorage: () => (state) => {
        state?.actions.setHasHydrated(true);
      },
    }
  )
);

export const useAuthLoggedIn = () => useAuthStoreInner((s) => s.isLoggedIn);
export const useAuthToken = () => useAuthStoreInner((s) => s.token);
export const useAuthActions = () => useAuthStoreInner((s) => s.actions);
export const useAuthHasHydrated = () => useAuthStoreInner((s) => s.hasHydrated);

export const getAuthToken = () => useAuthStoreInner.getState().token;
export const getRefreshToken = () => useAuthStoreInner.getState().refreshToken;
export const getDeviceTokenId = () => useAuthStoreInner.getState().deviceTokenId;
export const setAuthToken = (token: string) => useAuthStoreInner.getState().actions.setToken(token);
export const setDeviceTokenId = (id: number | null) => useAuthStoreInner.getState().actions.setDeviceTokenId(id);
export const logoutAuth = () => useAuthStoreInner.getState().actions.logout();