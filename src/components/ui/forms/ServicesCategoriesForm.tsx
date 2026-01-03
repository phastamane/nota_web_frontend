import { useServices } from "@/hooks/useServices";
import {
  ServicesCategoriesSchema,
  type ServicesCategoriesInput,
} from "@/schemas/ServicesInput";
import { Services } from "@/services/Services";
import type { ServicesCategoriesInterface } from "@/types/Services";
import { Select, SelectItem, Input, Button, addToast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function ServicesCategoriesForm() {
  const { sendServiceCategories, categories, error } = useServices();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServicesCategoriesInput>({
    resolver: zodResolver(ServicesCategoriesSchema),
    defaultValues: {
      name: "",
      parent_id: null,
    },
  });

  return (
    <form onSubmit={handleSubmit(sendServiceCategories)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Имя категории"
            labelPlacement="outside"
            isInvalid={!!errors.name}
            errorMessage={errors.name?.message}
          />
        )}
      />

      <Controller
        name="parent_id"
        control={control}
        render={({ field }) => (
          <Select
            label="Категория"
            labelPlacement="outside"
            selectedKeys={field.value !== null ? [String(field.value)] : []}
            items={categories}
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0];
              field.onChange(value ? Number(value) : null);
            }}
            isInvalid={!!errors.parent_id}
            errorMessage={errors.parent_id?.message}
          >
            {(cat) => <SelectItem key={String(cat.id)}>{cat.name}</SelectItem>}
          </Select>
        )}
      />

      <Button
        type={"submit"}
        isLoading={isSubmitting}
        className="bg-[#ffba00]"
      >
        Создать категорию
      </Button>
    </form>
  );
}
