export enum UserAccountType {
  USER = "user",
  ADMIN = "admin",
}

export interface UserTypes {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface loggedUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export type LoginDataType = {
  email: string;
  password: string;
};
