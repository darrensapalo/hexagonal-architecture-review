import { AccountService } from "./driver";
import { AccountProvider } from "./provider";

export class MyAccountService implements AccountService {
  constructor(private provider: AccountProvider) {}

  register(username: string, password: string): string {
    return this.provider.register(username, password);
  }
}
