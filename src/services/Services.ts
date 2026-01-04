import api from "@/http";
import type {
  CreateServiceCatDto,
  CreateServiceDto,
  ServicesCatInterface,
  ServicesInterface,
} from "@/types/Services";
import type { AxiosResponse } from "axios";

export class Services {

  static createCategory(
    payload: CreateServiceCatDto
  ): Promise<AxiosResponse<CreateServiceCatDto>> {
    return api.post<CreateServiceCatDto>(
      "services_categories/",
      payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  static getCategories(){
    return api.get<ServicesCatInterface[]>('services_categories/')
  }

  static createService(payload: CreateServiceDto): Promise<AxiosResponse<CreateServiceDto>>{
    return api.post<CreateServiceDto>("services/", payload)
  }


}
