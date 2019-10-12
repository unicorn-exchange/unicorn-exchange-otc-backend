import {NextFunction, Request, Response} from "express";
import {UserModel} from "../../types/models/user.model";
import {ExpressError} from "../../interfaces/IErrorReporter";
import {Errors} from "../../types/enums/errors";

export function attachCurrentUser(req: Request, res: Response, next: NextFunction) {
  if (!req.token) {
    return next(
      new ExpressError({
        name: Errors.UnauthorizedError,
        message: "No token was found",
        status: 401,
      }),
    );
  }
  UserModel.findByPk(req.token.userId).then(user => {
    if (!user) {
      return next(
        new ExpressError({
          name: Errors.UnauthorizedError,
          message: "No user was found",
          status: 401,
        }),
      );
    }
    req.user = user.toJSON();
  });
}
