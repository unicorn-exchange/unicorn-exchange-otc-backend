import {ISignInUserReq, ISignUpUserReq} from "../types/api/requests";
import {ISignInUserRes} from "../types/api/responses";
import {QueryInterfaceOptions} from "sequelize";

interface IAuthResponse {
  user?: ISignInUserRes;
  token?: string;
}

export interface IDecodedTokenObj {
  userId: number;
  exp: number;
  iat: number;
}

export interface IAuth {
  signIn(user: ISignInUserReq): Promise<IAuthResponse>;

  // TODO: QueryInterfaceOptions should not be in general IAuth
  signUp(user: ISignUpUserReq, options?: QueryInterfaceOptions): Promise<IAuthResponse>;
}
