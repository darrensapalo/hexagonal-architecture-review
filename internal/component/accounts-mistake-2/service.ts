import { LoginRequest, LoginResponse } from "./domain";
import { AccountService } from "./driver";
import { AccountProvider } from "./provider";

export class MyAccountService implements AccountService {
  constructor(private provider: AccountProvider) {}

  login(request: LoginRequest): LoginResponse {
    return this.provider.login(request);
  }
}
