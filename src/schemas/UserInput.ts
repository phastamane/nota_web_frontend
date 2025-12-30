import z from "zod";
const latinRegex = /^[A-Za-z]+$/;
export const UserRegitrationSchema = z.object({
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
  phone_number: z
  .string()
  .regex(
    /^\+7\d{10}$/,
    "Введите телефон в формате +79123456789"
  ),

  password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
  role: z.string(),
  license_number: z.string().min(6, "Номер лицензии должен быть не менее 6 цифр"),
  inn: z.string().min(6, "ИНН должен быть не менее 6 цифр"),
  description: z.string()
});

export type UserRegistrationInput = z.infer<typeof UserRegitrationSchema>;

export const UserLoginSchema = z.object({
  username: z.string().min(3, "Логин должен содержать не менее 3 символов"),
  password: z.string().min(6, "Пароль должен содержать не менее 6 символов"),
});

export type UserLoginInput = z.infer<typeof UserLoginSchema>;
