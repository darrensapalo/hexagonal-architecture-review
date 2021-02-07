export type Customer = {
  name: string;
};

export type RegisterCustomerRequest = {
  username: string;
  password: string;
  name: string;
};

export type RegisterCustomerResponse = {
  username: string;
};
