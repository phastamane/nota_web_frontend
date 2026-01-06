import api from "@/http";
import type { BookingInterface } from "@/types/Booking";
import type { AxiosResponse } from "axios";

export default class BookingService {


  static createBooking(payload: BookingInterface): Promise<AxiosResponse<BookingInterface>> {
    return api.post<BookingInterface>("customers/me/bookings", payload);
  }


}