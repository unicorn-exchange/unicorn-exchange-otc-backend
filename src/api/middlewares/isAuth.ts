import jwt from "express-jwt";
import {NextFunction, Request, Response} from "express";
import {IAppContext} from "../../interfaces/IContext";
import {ExpressError} from "../../interfaces/IErrorReporter";

export let isAuth = function(req: Request, res: Response, next: NextFunction) {
  next(
    new ExpressError({
      status: 500,
      message: "isAuth middleware is not initialized!",
      name: "isAuth error",
    }),
  );
};

export const TOKEN_PROP = "token";

export function initAuthMiddleware(ctx: IAppContext) {
  isAuth = jwt({
    secret: ctx.env.JWT_SECRET, // The _secret_ to sign the JWTs
    userProperty: TOKEN_PROP, // Use req.token to store the JWT
    getToken: getTokenFromHeader, // How to extract the JWT from the request
  });
}

function getTokenFromHeader(req: Request) {
  if (
    (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}
