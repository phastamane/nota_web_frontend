import React, { useState } from "react";
import { Input, Button, Select, SelectItem } from "@heroui/react";
import { EyeIcon, EyeOffIcon } from "../../shared/Icons";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UserRegitrationSchema,
  type UserRegistrationInput,
} from "../../schemas/UserInput";
import { useRegister } from "@/hooks/useRegister";



export default function RegisterForm() {
  const { register, error } = useRegister();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserRegistrationInput>({
    resolver: zodResolver(UserRegitrationSchema),
    shouldUnregister: true,
    defaultValues: {
      username: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      password: "",
      role: "customer",
    },
  });
  const selectedRole = useWatch({ control, name: "role" });
  return (
    <form
      className="w-full max-w-xs flex flex-col gap-4"
     onSubmit={handleSubmit(register)}

    >
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Логин"
            labelPlacement="outside"
            isInvalid={!!errors.username}
            errorMessage={errors.username?.message}
          />
        )}
      />

      <Controller
        name="first_name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Имя"
            labelPlacement="outside"
            isInvalid={!!errors.first_name}
            errorMessage={errors.first_name?.message}
          />
        )}
      />

      <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Фамилия"
            labelPlacement="outside"
            isInvalid={!!errors.last_name}
            errorMessage={errors.last_name?.message}
          />
        )}
      />

      <Controller
        name="phone_number"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Телефон"
            type="tel"
            labelPlacement="outside"
            isInvalid={!!errors.phone_number}
            errorMessage={errors.phone_number?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Пароль"
            labelPlacement="outside"
            type={isPasswordVisible ? "text" : "password"}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            endContent={
              <button
                type="button"
                onClick={() => setIsPasswordVisible((v) => !v)}
                className="text-default-400"
              >
                {isPasswordVisible ? <EyeIcon /> : <EyeOffIcon />}
              </button>
            }
          />
        )}
      />

      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <Select
            label="Роль"
            labelPlacement="outside"
            selectedKeys={[field.value]}
            onSelectionChange={(keys) =>
              field.onChange(Array.from(keys)[0])
            }
            isInvalid={!!errors.role}
            errorMessage={errors.role?.message}
          >
            <SelectItem key="customer">Пользователь</SelectItem>
            <SelectItem key="notary">Нотариус</SelectItem>
            <SelectItem key="admin">Администратор</SelectItem>
          </Select>
        )}
      />

      {selectedRole === "notary" && (
        <>
          <Controller
            name="license_number"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Номер лицензии"
                labelPlacement="outside"

              />
            )}
          />

          <Controller
            name="inn"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="ИНН"
                labelPlacement="outside"

              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Описание"
                labelPlacement="outside"

              />
            )}
          />
        </>
      )}

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="bg-[#ffba00]"

      >
        Зарегистрироваться
      </Button>

      {error && <p className="text-small text-red-900">{error}</p>}
    </form>
  );
}
