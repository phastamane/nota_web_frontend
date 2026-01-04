import { useService } from "@/hooks/useService";
import { useServicesCat } from "@/hooks/useServicesCat";
import {
  ServicesSchema,
  type ServicesSchemaInput,
} from "@/schemas/ServicesInput";
import { useAuthStore } from "@/store/useAuthStore";
import { Input, Select, SelectItem, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

type AddServiceFormProps = {
  onSuccess?: () => void;
};

export default function AddServiceForm({ onSuccess }: AddServiceFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ServicesSchemaInput>({
    resolver: zodResolver(ServicesSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category_id: null,
    },
  });

  const { createServise } = useService();
  const { categories } = useServicesCat();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await createServise(data);
        onSuccess?.();
      })}
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Название услуги"
            labelPlacement="outside"
            isInvalid={!!errors.title}
            errorMessage={errors.title?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Описание услуги"
            labelPlacement="outside"
            isInvalid={!!errors.description}
            errorMessage={errors.description?.message}
          />
        )}
      />

      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label="Цена услуги"
            labelPlacement="outside"
            isInvalid={!!errors.price}
            errorMessage={errors.price?.message}
            type="number"
            value={field.value === 0 ? "0" : field.value ? String(field.value) : ""}
            onChange={(event) => {
              const rawValue = event.target.value;
              field.onChange(rawValue === "" ? 0 : Number(rawValue));
            }}
          />
        )}
      />

      <Controller
        name="category_id"
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
            isInvalid={!!errors.category_id}
            errorMessage={errors.category_id?.message}
          >
            {(cat) => <SelectItem key={String(cat.id)}>{cat.name}</SelectItem>}
          </Select>
        )}
        
      />
      <Button type={"submit"} isLoading={isSubmitting} className="bg-[#ffba00]">
        Создать услугу
      </Button>
    </form>
  );
}
