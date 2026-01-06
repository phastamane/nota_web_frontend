import {z} from "zod";

export const BookingSchema = z.object({

     service_id: z.number().int().positive(),
     notary_profile_id: z.number().int().positive(),
})

export type BookingInput = z.infer<typeof BookingSchema>

