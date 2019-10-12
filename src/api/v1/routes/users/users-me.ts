import {IUserRes} from "../../../../types/api/responses";
import {UserModel} from "../../../../types/models/user.model";
import {IDecodedTokenObj} from "../../../../interfaces/IAuth";

export async function usersMeCtr(token?: IDecodedTokenObj): Promise<IUserRes> {
  if (!token) {
    throw new Error("ds");
  }
  return UserModel.findByPk(token.userId)
    .then(user => {
      if (!user) {
        throw new Error("No user");
      }
      return {
        ok: true,
        payload: user.toJSON(),
      } as IUserRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      } as IUserRes;
    });
}
