import {Container} from "typedi";
import {IUserRecord} from "../../interfaces/IUser";

/**
 * Attach user to req.user
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
// export function attachCurrentUser(req, res, next) {
//   const Logger = Container.get("logger");
//   try {
//     const UserModel = Container.get("userModel") as mongoose.Model<IUser & mongoose.Document>;
//     const userRecord = await UserModel.findById(req.token._id);
//     if (!userRecord) {
//       return res.sendStatus(401);
//     }
//     const currentUser = userRecord.toObject();
//     Reflect.deleteProperty(currentUser, "password");
//     Reflect.deleteProperty(currentUser, "salt");
//     req.currentUser = currentUser;
//     return next();
//   } catch (e) {
//     Logger.error("🔥 Error attaching user to req: %o", e);
//     return next(e);
//   }
// }
