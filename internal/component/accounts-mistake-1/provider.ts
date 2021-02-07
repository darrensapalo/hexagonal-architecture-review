export interface AccountProvider {
  // Performs the registration process, creating a new user with the
  // username and password specified.
  //
  // Returns the user's ID.
  register(username: string, password: string): string;
}
