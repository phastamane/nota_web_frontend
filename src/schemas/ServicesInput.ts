import {z} from "zod";

export const ServicesCatSchema = z.object({

    name: z.string().min(1, "Поле не может быть пустым"),
     parent_id: z.number().int().positive().nullable(),
})

export type ServicesCatInput = z.infer<typeof ServicesCatSchema>

export const ServicesSchema = z.object({
    title: z.string().min(1, "Имя не может быть пустым"),
    description:  z.string().min(1, "Описание не может быть пустым"),
    price: z.number().int().positive(),
    category_id: z.number().int().positive().nullable(),
})

export type ServicesSchemaInput = z.infer<typeof ServicesSchema>