import {ISignUpUserInput, IUserRecord} from "./IUser";
import {ICommonResponse} from "../types/api-doc";

export interface IAuth {
  signIn(email: string, password: string): Promise<{user: IUserRecord; token: string}>;
  signUp(user: ISignUpUserInput): Promise<ICommonResponse>;
}
