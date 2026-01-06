import { Services } from "@/services/Services";
import type { CreateServiceDto, UpdateServiceDto } from "@/types/Services";
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

  const updateService = useMutation({

    mutationFn: (data: UpdateServiceDto) => 
      Services.updateService(data),

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

    // 🗑 DELETE
  const deleteService = useMutation({
    mutationFn: (id: number) =>
      Services.deleteServiсe(id),

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

  const getService = useMutation({
    mutationFn: (id: number) =>
      Services.getServices(id),
  });

  return {
    getService: getService.mutateAsync,
    createService: createServise.mutateAsync,
    updateService: updateService.mutateAsync,
    deleteService: deleteService.mutateAsync
  }
}
