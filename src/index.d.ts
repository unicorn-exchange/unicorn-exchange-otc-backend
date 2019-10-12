import {IAppContext} from "./interfaces/IContext";
import {UserModel} from "./types/models/user.model";
import {IDecodedTokenObj} from "./interfaces/IAuth";

declare global {
  namespace Express {
    export interface Application {
      ctx: IAppContext;
    }

    export interface Request {
      token?: IDecodedTokenObj;
      user: UserModel; // TODO: Think
    }
  }
}
