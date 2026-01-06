import { useEffect } from "react";
import { useService } from "@/hooks/useService";
import { useServicesCat } from "@/hooks/useServicesCat";
import {
  ServicesSchema,
  type ServicesSchemaInput,
} from "@/schemas/ServicesInput";
import { Input, Select, SelectItem, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

type Mode = "create" | "edit";

type AddServiceFormProps = {
  mode: Mode;
  initialData?: {
    id: number;
    title: string;
    description: string;
    price: number;
    category_id: number;
  };
  onSuccess?: () => void;
};

export default function AddServiceForm({
  mode,
  initialData,
  onSuccess,
}: AddServiceFormProps) {
  const { createService, updateService } = useService();
  const { categories } = useServicesCat();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ServicesSchemaInput>({
    resolver: zodResolver(ServicesSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      category_id: 0,
    },
  });

  // 🔹 Prefill при edit
  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({
        title: initialData.title,
        description: initialData.description,
        price: initialData.price,
        category_id: initialData.category_id,
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = async (data: ServicesSchemaInput) => {
    if (mode === "create") {
      await createService(data);
    }

    if (mode === "edit" && initialData) {
      await updateService({
        id: initialData.id,
        title: data.title,
        description: data.description,
        price: data.price,
        category_id: data.category_id,
      });
    }

    onSuccess?.();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {/* TITLE */}
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

      {/* DESCRIPTION */}
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

      {/* PRICE */}
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <Input
            label="Цена услуги"
            labelPlacement="outside"
            type="number"
            isInvalid={!!errors.price}
            errorMessage={errors.price?.message}
            value={field.value === 0 ? "" : String(field.value)}
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value === "" ? 0 : Number(value));
            }}
          />
        )}
      />

      {/* CATEGORY */}
      <Controller
        name="category_id"
        control={control}
        render={({ field }) => (
          <Select
            label="Категория"
            labelPlacement="outside"
            selectedKeys={
              field.value ? [String(field.value)] : []
            }
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0];
              field.onChange(value ? Number(value) : 0);
            }}
            isInvalid={!!errors.category_id}
            errorMessage={errors.category_id?.message}
          >
            {categories.map((cat) => (
              <SelectItem key={String(cat.id)}>
                {cat.name}
              </SelectItem>
            ))}
          </Select>
        )}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="bg-[#ffba00]"
      >
        {mode === "create" ? "Создать услугу" : "Сохранить изменения"}
      </Button>
    </form>
  );
}
