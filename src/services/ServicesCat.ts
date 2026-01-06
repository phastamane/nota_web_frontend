import api from "@/http";
import type {
  CreateServiceCatDto,
  UpdateServiceCatDto,
  ServicesCatInterface,
} from "@/types/Services";
import type { AxiosResponse } from "axios";

export class ServicesCat {

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

  static patchCategories
  (payload: UpdateServiceCatDto): Promise<AxiosResponse<UpdateServiceCatDto>> {
    return api.patch<UpdateServiceCatDto>(
      `services_categories/${payload.category_id}`,
      payload,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

    static deleteCategories(id: number){
    return api.delete(`services_categories/${id}`)
  }
  

}
