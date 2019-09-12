import {IAuth} from "../../../../interfaces/IAuth";
import {ISignInRes} from "../../../../types/api/responses";
import {ISignInUserReq} from "../../../../types/api/requests";
import {signInValidationScheme} from "../../../../types/validators/sign-in-validator";
import {validateObject} from "../../../../utils/utils";

export async function signInCtr(auth: IAuth, user: ISignInUserReq): Promise<ISignInRes> {
  return validateObject(user, signInValidationScheme)
    .then(() => auth.signIn(user.email, user.password))
    .then(({token}) => {
      return {
        ok: true,
        errors: [],
        token,
      };
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err.message],
      };
    });
}
