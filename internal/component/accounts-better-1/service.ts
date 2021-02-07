import { RegisterCustomerRequest, RegisterCustomerResponse } from "./domain";
import { AccountService } from "./driver";
import { AccountProvider } from "./provider";

export class MyAccountService implements AccountService {
  constructor(private provider: AccountProvider) {}

  register(request: RegisterCustomerRequest): RegisterCustomerResponse {
    return {
      username: request.username
    };
  }
}
