import { RegisterCustomerRequest, RegisterCustomerResponse } from "./domain";

export interface AccountService {
  register(request: RegisterCustomerRequest): RegisterCustomerResponse;
}
