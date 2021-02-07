import { LoginRequest, LoginResponse } from "./domain";

export interface AccountService {
  login(loginRequest: LoginRequest): LoginResponse;
}
