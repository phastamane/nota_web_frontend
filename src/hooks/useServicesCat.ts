import { Services } from "@/services/Services";
import type { CreateServiceCatDto} from "@/types/Services";
import { useState } from "react";
import { addToast } from "@heroui/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useServicesCat() {
  const queryClient = useQueryClient();

  const sendServiceCategories = useMutation({
    mutationFn: (data: CreateServiceCatDto) =>
      Services.createCategory(data),

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

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await Services.getCategories();
      return res.data;
    },
  });

  return {
    sendServiceCategories: sendServiceCategories.mutateAsync,
    categories,
  };
}
