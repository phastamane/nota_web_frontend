import { ServicesCat } from "@/services/ServicesCat";
import type {
  CreateServiceCatDto,
  UpdateServiceCatDto,
} from "@/types/Services";
import { addToast } from "@heroui/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useServicesCat() {
  const queryClient = useQueryClient();

  const createCategory = useMutation({
    //Client
    mutationFn: (data: CreateServiceCatDto) => ServicesCat.createCategory(data),

    onSuccess: () => {
      addToast({
        title: "Категория добавлена",
        color: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: () => {
      addToast({
        title: "Ошибка при создании категории",
        color: "danger",
      });
    },
  });

  //GET CATEGORY
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await ServicesCat.getCategories();
      return res.data;
    },
  });

  //PATCH
  const updateCategory = useMutation({
    mutationFn: (data: UpdateServiceCatDto) =>
      ServicesCat.patchCategories(data),

    onSuccess: () => {
      addToast({
        title: "Категория изменена",
        color: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: () => {
      addToast({
        title: "Ошибка при изменении категории",
        color: "danger",
      });
    },
  });

  // 🗑 DELETE
  const deleteCategories = useMutation({
    mutationFn: (id: number) => ServicesCat.deleteCategories(id),

    onSuccess: () => {
      addToast({
        title: "Услуга удалена",
        color: "success",
      });

      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },

    onError: () => {
      addToast({
        title: "Ошибка при удалении услуги",
        color: "danger",
      });
    },
  });

  return {
    createCategory: createCategory.mutateAsync,
    updateCategory: updateCategory.mutateAsync,
    deleteCategories: deleteCategories.mutateAsync,
    categories,

    isCreating: createCategory.isPending,
    isUpdating: updateCategory.isPending,
  };
}
