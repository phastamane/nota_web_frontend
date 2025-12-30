import { create } from "zustand";
import type { IUser } from "../types/IUser";
import type { ICustomer } from "../types/ICustomer";
import type { INotary } from "@/types/INotary";

type Store = {
  user: IUser | null;
  isAuth: boolean;
  customer: ICustomer | null;
  setCustomer: (customer: ICustomer) => void;
  notary: INotary | null;
  setNotary: (notary: INotary) => void;
  setUser: (user: IUser) => void;
  logout: () => void;
};

export const useAuthStore = create<Store>()((set) => ({
  user: null,
  customer: null,
  notary: null,
  isAuth: false,
  setCustomer: (customer) => set({ customer, isAuth: true }),
  setUser: (user) => set({ user, isAuth: true }),
  setNotary: (notary) => set({ notary, isAuth: true }),
  logout: () =>
  set({
    user: null,
    customer: null,
    notary: null,
    isAuth: false,
  }),

}));
