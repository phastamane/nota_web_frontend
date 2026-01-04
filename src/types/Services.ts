export interface ServicesCatInterface {
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

export type CreateServiceCatDto = {
  name: string;
  parent_id: number | null;
};

export interface ServicesInterface
  {
  title: string,
  description: string,
  price: number,
  category_id: number,
  id: number,
  created_at: Date,
  updated_at: Date
}

export type CreateServiceDto = {
  title: string;
  description: string;
  price: number,
  category_id: number | null
};

