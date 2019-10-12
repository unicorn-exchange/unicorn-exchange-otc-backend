import {IAuth} from "../../../../interfaces/IAuth";
import {ISignInRes} from "../../../../types/api/responses";
import {ISignInUserReq} from "../../../../types/api/requests";
import {signInValidationScheme} from "../../../../types/validators/sign-in-validator";
import {validateObject} from "../../../../utils/utils";

export async function authSignInCtr(auth: IAuth, user: ISignInUserReq): Promise<ISignInRes> {
  return validateObject(user, signInValidationScheme)
    .then(() =>
      auth.signIn({
        email: user.email,
        password: user.password,
      }),
    )
    .then(({token}) => {
      return {
        ok: true,
        errors: [],
        token,
      } as ISignInRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err.message],
      };
    });
}
