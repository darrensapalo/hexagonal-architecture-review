export type LoginRequest = {
  // password is required for all log in requests
  password: string;
  // Support for dynamic structures that vary depending on
  // infrastructure implementation
  metadata: any;
};

export type LoginResponse = {
  accessToken: string;
};
