import {z} from "zod";

export const ServicesCategoriesSchema = z.object({

    name: z.string().min(1, "Поле не может быть пустым"),
     parent_id: z.number().int().positive().nullable(),
})

export type ServicesCategoriesInput = z.infer<typeof ServicesCategoriesSchema>