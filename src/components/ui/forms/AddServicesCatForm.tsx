import { useEffect } from "react";
import { useServicesCat } from "@/hooks/useServicesCat";
import {
  ServicesCatSchema,
  type ServicesCatInput,
} from "@/schemas/ServicesInput";
import { Select, SelectItem, Input, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

type Mode = "create" | "edit";

type AddServicesCatFormProps = {
  mode: Mode;
  initialData?: {
    id: number;
    name: string;
    parent_id: number | null;
  };
  onSuccess?: () => void;
};

export default function AddServicesCatForm({
  mode,
  initialData,
  onSuccess,
}: AddServicesCatFormProps) {
  const {
    createCategory,
    updateCategory,
    categories,
  } = useServicesCat();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ServicesCatInput>({
    resolver: zodResolver(ServicesCatSchema),
    defaultValues: {
      name: "",
      parent_id: null,
    },
  });

  // 🔹 Prefill при edit
  useEffect(() => {
    if (mode === "edit" && initialData) {
      reset({
        name: initialData.name,
        parent_id: initialData.parent_id,
      });
    }
  }, [mode, initialData, reset]);

  const onSubmit = async (data: ServicesCatInput) => {
    if (mode === "create") {
      await createCategory(data);
    }

    if (mode === "edit" && initialData) {
      await updateCategory({
        category_id: initialData.id,
        parent_id: data.parent_id,
        name: data.name,
      });
    }

    onSuccess?.();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {/* NAME */}
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

      {/* PARENT CATEGORY */}
      {mode === 'create' &&
        <Controller
        name="parent_id"
        control={control}
        render={({ field }) => (
          <Select
            label="Родительская категория"
            labelPlacement="outside"
            selectedKeys={
              field.value !== null ? [String(field.value)] : []
            }
            onSelectionChange={(keys) => {
              const value = Array.from(keys)[0];
              field.onChange(value ? Number(value) : null);
            }}
            isInvalid={!!errors.parent_id}
            errorMessage={errors.parent_id?.message}
          >
            {categories
              .filter((cat) => cat.id === initialData?.id) 
              .map((cat) => (
                <SelectItem key={String(cat.id)}>
                  {cat.name}
                </SelectItem>
              ))}
          </Select>
        )}
      />}

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="bg-[#ffba00]"
      >
        {mode === "create"
          ? "Создать категорию"
          : "Сохранить изменения"}
      </Button>
    </form>
  );
}
