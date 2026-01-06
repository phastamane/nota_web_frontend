import api from "@/http";
import type {

  CreateServiceDto,
  ServicesInterface,
  UpdateServiceDto,

} from "@/types/Services";
import type { AxiosResponse } from "axios";

export class Services {

  static createService(payload: CreateServiceDto): Promise<AxiosResponse<CreateServiceDto>>{
    return api.post<CreateServiceDto>("services/", payload)
  }

  static updateService(payload: UpdateServiceDto): Promise<AxiosResponse<UpdateServiceDto>>{
    return api.patch<UpdateServiceDto>(`services/${payload.id}`, payload)
  }

  static deleteServiсe(id: number){
    return api.delete(`services/${id}`)
  }

  static getServices(id: number){
    return api.get<ServicesInterface>(`services/${id}`)
  }


}
