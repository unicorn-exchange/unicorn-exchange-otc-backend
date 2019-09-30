import {NextFunction, Request, Response} from "express";
import {UserModel} from "../../types/models/user.model";
import {decodeToken} from "./isAuth";

export function attachCurrentUser(req: Request, res: Response, next: NextFunction) {
  if (!req.token) {
    return next(new Error("No token"));
  }
  const obj = decodeToken(req.token);
  UserModel.findById(obj.userId).then(user => {
    if (!user) {
      return next(new Error("No user"));
    }
    req.user = user;
  });

  // const Logger = Container.get("logger");
  // try {
  //   const UserModel = Container.get("userModel") as mongoose.Model<IUser & mongoose.Document>;
  //   const userRecord = await UserModel.findById(req.token._id);
  //   if (!userRecord) {
  //     return res.sendStatus(401);
  //   }
  //   const currentUser = userRecord.toObject();
  //   Reflect.deleteProperty(currentUser, "password");
  //   Reflect.deleteProperty(currentUser, "salt");
  //   req.currentUser = currentUser;
  //   return next();
  // } catch (e) {
  //   Logger.error("🔥 Error attaching user to req: %o", e);
  //   return next(e);
  // }
}
