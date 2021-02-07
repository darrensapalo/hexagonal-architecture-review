import { AccountProvider } from "./internal/component/accounts/provider";
import { MyAccountService } from "./internal/component/accounts/service";
// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter!</h1>`;

const provider = {} as AccountProvider;

const AccountService = new MyAccountService(provider);

AccountService.register("test");
