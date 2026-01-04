import { Services } from "@/services/Services";
import type { CreateServiceDto } from "@/types/Services";
import { addToast } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useService() {
    const queryClient = useQueryClient()
  const createServise = useMutation({
    mutationFn: (data: CreateServiceDto) => 
      Services.createService(data),

      onSuccess: () => {
        addToast({
            title: 'Услуга добавлена',
            color: 'success'
        })
        queryClient.invalidateQueries({
            queryKey: ['categories']
        })
        },

        

        onError: () => {
      addToast({
        title: "Ошибка при создании услуги",
        color: "danger",
      });
    },
  })

  return {createServise: createServise.mutateAsync}
}
