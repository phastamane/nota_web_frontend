import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useUser from "./useUser";
import getUserByRole from "../services/GetUserByRole";
import { useAuthStore } from "../store/useAuthStore";
import type { ICustomer } from "../types/ICustomer";
import type { INotary } from "../types/INotary";

function isNotaryProfile(profile: ICustomer | INotary): profile is INotary {
  return "license_number" in profile;
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
  }, [user, profile, isError]);

  return { isLoading, token };
}
