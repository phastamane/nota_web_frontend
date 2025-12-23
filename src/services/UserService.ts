import type { AxiosResponse } from "axios";
import api from "../http";
import type { IUser } from "../types/IUser";

export default class UserService {
  static fetchUser(): Promise<AxiosResponse<IUser>> {
    return api.get<IUser>("users/me");
  }
}
