export interface ServicesInterface {
    name: string,
    parent_id: number,
    id: number,
    created_at: Date,
    updated_at: Date,
    services: [
      {
        title: string,
        description: string,
        price: string,
        category_id: number,
        id: number,
        created_at: Date,
        updated_at: Date
      }
    ]
  }

export interface ServicesCategoriesInterface{
    name: string,
    parent_id: number | null,
}

export type CreateServiceCategoryDto = {
  name: string;
  parent_id: number | null;
};
