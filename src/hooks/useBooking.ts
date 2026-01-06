import BookingService from "@/services/BookingService";
import { Services } from "@/services/Services";
import type { BookingInterface } from "@/types/Booking";
import type { INotary } from "@/types/pofile/INotary";
import type { CreateServiceDto, UpdateServiceDto } from "@/types/Services";
import { addToast } from "@heroui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useBooking() {
  const queryClient = useQueryClient();
  const createBooking = useMutation({
    mutationFn: (data: BookingInterface) => BookingService.createBooking(data),

    onSuccess: () => {
      addToast({
        title: "Услуга добавлена",
        color: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: () => {
      addToast({
        title: "Ошибка при создании услуги",
        color: "danger",
      });
    },
  });

  const { data: notariesList = [] } = useQuery<INotary[]>({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await BookingService.getAllNotaries();
      return res.data;
    },
  });

  const dowloadReceipt = async () => {
    const bookings = (await BookingService.getBookings()).data;
    const lastBooking = bookings.at(-1);

    if (!lastBooking) {
      addToast({
        title: "Бронирования не найдены",
        color: "warning",
      });
      return;
    }

    const response = await BookingService.dowloadReceipt(lastBooking?.id);
    const blob = new Blob([response.data], { type: "application/pdf" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `booking_${lastBooking?.id}_receipt.pdf`;
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  };

  return {
    createBooking: createBooking.mutateAsync,
    notariesList,
    dowloadReceipt,
  };
}
