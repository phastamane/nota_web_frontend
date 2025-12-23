import { create } from 'zustand'
import type { IUser } from '../types/IUser'

type Store = {
    user: IUser | null,
    isAuth: boolean,
    setUser: (user: IUser) => void,
    logout: () => void
}

export const useAuthStore = create<Store>()((set) => ({
  user: null,
    isAuth: false,
    setUser: (user) => set({user, isAuth: true}),
    logout: () => set({user: null, isAuth: false})
}))
