export interface RegisterInterface {
  username: string;
  password: string;
  role: string;
}
export interface CustomerInterface {
    phone_number: string,
    first_name: string,
    last_name: string
}

export interface NotaryInterface {
    phone_number: string,
    first_name: string,
    last_name: string,
    license_number: string,
    inn: string,
    description: string
}