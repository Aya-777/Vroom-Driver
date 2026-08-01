import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storageAdapter } from '../../core/storage/storage.adapter';
import { DriverInfo } from '../../modules/profile/types/profile.types';

export interface UserData {
    id: number;
    phone_number: string;
    first_name: string;
    last_name: string;
    role: string;
    profile_image: string | null;
    account_status?: string;
    rating?: number;
    driverInfo?: DriverInfo;
}

interface UserState {
    user: UserData | null;
    hasHydrated: boolean;
    actions: {
        setUser: (user: UserData) => void;
        updateUser: (partial: Partial<UserData>) => void;
        clearUser: () => void;
        setHasHydrated: (value: boolean) => void;
    };
}

const useUserStoreInner = create<UserState>()(
    persist(
        (set, get) => ({
            user: null,
            hasHydrated: false,
            actions: {
                setUser: (user) => set({ user }),
                updateUser: (partial) => {
                    const current = get().user;
                    if (current) set({ user: { ...current, ...partial } });
                },
                clearUser: () => set({ user: null }),
                setHasHydrated: (value) => set({ hasHydrated: value }),
            },
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => ({
                getItem: storageAdapter.getItem,
                setItem: storageAdapter.setItem,
                removeItem: storageAdapter.removeItem,
            })),
            partialize: (state) => ({ user: state.user }),
            onRehydrateStorage: () => (state) => {
                state?.actions.setHasHydrated(true);
            },
        }
    )
);

export const useCurrentUser = () => useUserStoreInner((s) => s.user);
export const useUserHasHydrated = () => useUserStoreInner((s) => s.hasHydrated);
export const useUserActions = () => useUserStoreInner((s) => s.actions);

export const getCurrentUser = () => useUserStoreInner.getState().user;
export const setCurrentUser = (user: UserData) => useUserStoreInner.getState().actions.setUser(user);
export const updateCurrentUser = (partial: Partial<UserData>) => useUserStoreInner.getState().actions.updateUser(partial);
export const clearCurrentUser = () => useUserStoreInner.getState().actions.clearUser();