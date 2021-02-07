import { AccountProvider } from "./internal/component/accounts-better-1/provider";
import { MyAccountService } from "./internal/component/accounts-better-1/service";
// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter!</h1>`;

const provider = {} as AccountProvider;

const AccountService = new MyAccountService(provider);
