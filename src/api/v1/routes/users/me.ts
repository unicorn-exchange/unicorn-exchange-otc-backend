import {ISignInUserRes} from "../../../../types/api/responses";
import {decodeToken} from "../../../middlewares/isAuth";
import {UserModel} from "../../../../types/models/user.model";

export function meCtr(token?: string): Promise<ISignInUserRes> {
  if (!token) {
    throw new Error("ds");
  }
  const obj = decodeToken(token);
  return UserModel.findByPk(obj.userId).then(user => {
    if (!user) {
      throw new Error("ds");
    }
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      username: user.username,
    };
  });
}
