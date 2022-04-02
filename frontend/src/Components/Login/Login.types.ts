export enum LoginConstants {
  EmailError = "Please enter a valid email",
}
export interface ILoginProps {}
export interface ILoginState {
  isAdmin: boolean;
  userEmail: string;
  userPassword: string;
}
export enum EventNames {
  userEmail = "userEmail",
  userPassword = "userPassword",
}
