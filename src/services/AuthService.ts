import type { AxiosResponse } from "axios";
import api from "../http";
import type { AuthResponse } from "../types/AuthResponse";
import type { RegisterInterface } from "../types/Register";

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
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(
      "auth/register",
      new URLSearchParams({ username, password }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );
  }
  static async logout() {
    return api.post("auth/logout");
  }
}
