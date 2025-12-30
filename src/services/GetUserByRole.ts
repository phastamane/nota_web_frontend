import api from "@/http";
import type { ICustomer } from "../types/ICustomer";
import type { INotary } from "@/types/INotary";

export default async function getUserByRole(role: string) {
  if (role === "customer" || role === "admin") {
    return await api.get<ICustomer>("customers/me");
  }
  if (role === "notary") {
    return await api.get<INotary>("notaries/me");
  }
  return null;
}
