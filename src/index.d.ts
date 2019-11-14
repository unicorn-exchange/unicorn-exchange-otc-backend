import {IAppContext} from "./interfaces/IContext";
import {IDecodedTokenObj} from "./interfaces/IAuth";
import {IAuthCtx} from "./socket/auth-middleware";

declare global {
  namespace Express {
    export interface Application {
      ctx: IAppContext;
    }

    export interface Request {
      token?: IDecodedTokenObj;
      ctx: IAppContext;
      user: IAuthCtx;
    }

    namespace SocketIO {
      export interface Socket {
        authCtx: IAuthCtx;
      }
    }
  }
}
