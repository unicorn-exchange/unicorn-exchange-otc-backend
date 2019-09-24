import {IAuth} from "../../../../interfaces/IAuth";
import {ISignUpRes} from "../../../../types/api/responses";
import {ISignUpUserReq} from "../../../../types/api/requests";
import {signUpValidationScheme} from "../../../../types/validators/sign-up-validator";
import {validateObject} from "../../../../utils/utils";

export async function signUpCtr(auth: IAuth, user: ISignUpUserReq): Promise<ISignUpRes> {
  return validateObject(user, signUpValidationScheme)
    .then(() => {
      return auth.signUp(user).then(({user, token}) => {
        return {
          ok: true,
          errors: [],
          user,
          token,
        } as ISignUpRes;
      });
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
