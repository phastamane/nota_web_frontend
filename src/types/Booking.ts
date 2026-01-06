import type { ICustomer } from "./pofile/ICustomer";
import type { INotary } from "./pofile/INotary";
import type { ServicesInterface } from "./Services";

export interface BookingInterface{
    
  service_id: number,
  notary_profile_id: number

}

export interface BookingReceipt {
  id: number;

  commission_percent: string;
  commission_amount: string;
  total_amount: string;

  service: ServicesInterface;
  notary_profile: INotary;
  customer_profile: ICustomer;
}
