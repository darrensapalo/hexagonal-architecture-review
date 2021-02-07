export type GoogleUser = {
  email: string;
  password: string;
};

export type FacebookUser = {
  graphid: string;
  password: string;
}

export type TwitterUser = {
  twitterHandle: string;
  password: string;
}

export type LoginRequest = GoogleUser | FacebookUser | TwitterUser;

export type LoginResponse = {
  accessToken: string;
};
