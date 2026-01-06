import api from "@/http";
import type { BookingInterface, BookingReceipt } from "@/types/Booking";
import type { INotary } from "@/types/pofile/INotary";
import type { AxiosResponse } from "axios";

export default class BookingService {


  static createBooking(payload: BookingInterface): Promise<AxiosResponse<BookingInterface>> {
    return api.post<BookingInterface>("customers/me/bookings", payload);
  }

    static getAllNotaries(){
    return api.get<INotary[]>('notaries/')
  }

  static getBookings(){
    return api.get<BookingReceipt[]>('/customers/me/bookings')
  }

  static async dowloadReceipt(booking_id: number){
    return api.get(`/customers/me/bookings/${booking_id}/receipt`, {responseType: 'blob'})
  }


}