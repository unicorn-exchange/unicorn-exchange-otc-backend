import {Socket} from "socket.io";
import {nextFn} from "../utils/types";
import {IAppContext} from "../interfaces/IContext";

export interface IAuthCtx {
  user: {
    id: number; // Object id in mongo
    socketId?: string; // Active socket id (if exists)
  };
}

// TODO
function getUserByToken(ctx: IAppContext, token?: string): Promise<IAuthCtx> {
  return !token
    ? Promise.reject(new Error("Auth error"))
    : Promise.resolve({
        user: {_id: token},
      });
}

export function authMiddleware(socket: Socket, next: nextFn, ctx: IAppContext) {
  const {token} = socket.handshake.query;

  return getUserByToken(ctx, token)
    .then(res => {
      res.user.socketId = socket.id;
      socket.authCtx = res;
      next();
    })
    .catch(err => next(err));
}
