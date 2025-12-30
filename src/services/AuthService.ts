import type { AxiosResponse } from "axios";
import api from "../http";
import type { AuthResponse } from "../types/AuthResponse";
import type { RegisterInterface, CustomerInterface, NotaryInterface} from "@/types/CreateRoles";

export default class AuthService {
  static async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(
      "auth/login",
      new URLSearchParams({ username, password }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
  }

  static async register(
    payload: RegisterInterface
  ): Promise<AxiosResponse<RegisterInterface>> {
    return api.post<RegisterInterface>("auth/register", payload, {
      headers: { "Content-Type": "application/json" },
    });
  }

  static async createCustomer(
    payload: CustomerInterface
  ): Promise<AxiosResponse<CustomerInterface>> {
    return api.post("customers/me", payload, {
      headers: { "Content-Type": "application/json" },
    });
  }
  
  static async createNotary(
    payload: NotaryInterface,
  ): Promise<AxiosResponse<NotaryInterface>>{
    return api.post('/notaries/me', payload,
      {headers: { "Content-Type": "application/json" }},
    )
  }

  static async logout() {
    return api.post("auth/logout");
  }
}
