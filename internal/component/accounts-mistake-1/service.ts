import { AccountService } from "./driver";
import { AccountProvider } from "./provider";

export class MyAccountService implements AccountService {
  constructor(private provider: AccountProvider) {}

  register(username: string): string {
    return username;
  }
}
