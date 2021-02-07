import { LoginRequest, LoginResponse } from "./domain";

export interface AccountProvider {
  // Performs the log in process.
  //
  // Returns the user's access token upon successful login.
  login(loginRequest: LoginRequest): LoginResponse;
}
