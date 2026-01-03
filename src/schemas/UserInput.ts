import { z } from "zod";

const latinRegex = /^[A-Za-z]+$/;

const base = {
  username: z
    .string()
    .min(3, "Минимум 3 символа")
    .regex(latinRegex, "Только латинские буквы"),

  first_name: z
    .string()
    .min(2, "Минимум 2 символа")
    .regex(latinRegex, "Только латинские буквы"),

  last_name: z
    .string()
    .min(2, "Минимум 2 символа")
    .regex(latinRegex, "Только латинские буквы"),

  phone_number: z.string().regex(
    /^\+7\d{10}$/,
    "Введите телефон в формате +79123456789"
  ),

  password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
};

export const UserRegitrationSchema = z.discriminatedUnion("role", [
  // Обычный пользователь
  z.object({
    ...base,
    role: z.literal("customer"),
  }),

  // Администратор
  z.object({
    ...base,
    role: z.literal("admin"),
  }),

  // Нотариус
  z.object({
    ...base,
    role: z.literal("notary"),
    license_number: z.string().min(3, "Укажите номер лицензии"),
    inn: z.string().min(5, "Укажите ИНН"),
    description: z.string(),
  }),
]);

export type UserRegistrationInput = z.infer<typeof UserRegitrationSchema>;
