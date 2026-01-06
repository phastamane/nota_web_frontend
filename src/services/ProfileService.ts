import type { AxiosResponse } from "axios";
import api from "../http";
import type { IUser } from "../types/pofile/IUser";
import type { INotary } from "@/types/pofile/INotary";

export default class ProfileService {
  static fetchUser(): Promise<AxiosResponse<IUser>> {
    return api.get<IUser>("users/me");
  }
    static fetchNotary(): Promise<AxiosResponse<INotary>> {
    return api.get<INotary>("notaries/me");
  }

  // static getAllNotaries(){
  //   return api.get()
  // }

}
