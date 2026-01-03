import api from "@/http";
import type {
  ServicesCategoriesInterface,
  ServicesInterface,
} from "@/types/Services";
import type { AxiosResponse } from "axios";

export class Services {

  static create(
    payload: ServicesCategoriesInterface
  ): Promise<AxiosResponse<ServicesCategoriesInterface>> {
    return api.post<ServicesCategoriesInterface>(
      "services_categories/",
      payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  static getCategories(){
    return api.get<ServicesInterface[]>('services_categories/')
  }
}
