import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import api from "@/http/index";
import { useAuthStore } from "../store/useAuthStore";
import type { ICustomer } from "../types/pofile/ICustomer";
import type { INotary } from "../types/pofile/INotary";

function isNotaryProfile(profile: ICustomer | INotary): profile is INotary {
  return "license_number" in profile;
}

async function getUserByRole(role: string) {
  if (role === "customer" || role === "admin") {
    return await api.get<ICustomer>("customers/me");
  }
  if (role === "notary") {
    return await api.get<INotary>("notaries/me");
  }
  return null;
}
export default function useAuthBootstrap() {
  const token = localStorage.getItem("access_token");
  const { data: user, isError, isLoading } = useUser(!!token);
  const { data: profile } = useQuery<ICustomer | INotary | null>({
    queryKey: ["profile", user?.role],
    queryFn: async () => {
      if (!user?.role) return null;
      const res = await getUserByRole(user.role);
      return res?.data ?? null;
    },
    enabled: !!user?.role,
    retry: false,
  });

  useEffect(() => {
    if (user) useAuthStore.getState().setUser(user);
    if (profile) {
      if (user?.role === "notary" && isNotaryProfile(profile)) {
        useAuthStore.getState().setNotary(profile);
      } else {
        useAuthStore.getState().setCustomer(profile);
      }
    }
    if (isError) {
      localStorage.removeItem("access_token");
      useAuthStore.getState().logout();
    }
    if (!token || !isLoading) {
      useAuthStore.getState().setAuthReady(true);
    }
  }, [user, profile, isError, token, isLoading]);

  return { isLoading, token };
}
