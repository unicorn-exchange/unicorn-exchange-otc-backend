import {ISignUpUserReq} from "../types/api/requests";
import {ISignInUserRes} from "../types/api/responses";

interface IAuthResponse {
  user?: ISignInUserRes;
  token?: string;
}

export interface IAuth {
  signIn(email: string, password: string): Promise<IAuthResponse>;

  signUp(user: ISignUpUserReq): Promise<IAuthResponse>;
}
