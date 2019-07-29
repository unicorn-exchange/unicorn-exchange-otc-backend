import {IContext} from "../../interfaces/IContext";

declare global {
  namespace Express {
    export interface Application {
      ctx: IContext;
    }

    export interface Request {
      token: string;
    }
  }
}
