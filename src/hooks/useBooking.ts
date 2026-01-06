import BookingService from "@/services/BookingService";
import { Services } from "@/services/Services";
import type { BookingInterface } from "@/types/Booking";
import type { CreateServiceDto, UpdateServiceDto } from "@/types/Services";
import { addToast } from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useBooking() {
    const queryClient = useQueryClient()
  const createBooking = useMutation({
    mutationFn: (data: BookingInterface) => 
      BookingService.createBooking(data),

      onSuccess: () => {
        addToast({
            title: 'Услуга добавлена',
            color: 'success'
        })
        queryClient.invalidateQueries({
            queryKey: ['booking']
        })
        },
        onError: () => {
      addToast({
        title: "Ошибка при создании услуги",
        color: "danger",
      });
    },
  })


  return {
    createBooking: createBooking.mutateAsync
  }
}
