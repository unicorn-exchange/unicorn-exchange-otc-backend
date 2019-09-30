import {IAppContext} from "./interfaces/IContext";
import {UserModel} from "./types/models/user.model";

declare global {
  namespace Express {
    export interface Application {
      ctx: IAppContext;
    }

    export interface Request {
      token?: string;
      user?: UserModel;
    }
  }
}
