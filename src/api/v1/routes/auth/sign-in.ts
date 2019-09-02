import Joi from "@hapi/joi";
import {IAuth} from "../../../../interfaces/IAuth";
import {ISignInRes} from "../../../../types/api/responses";
import {ISignInUserReq} from "../../../../types/api/requests";

export const validationScheme = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});

export async function signInCtr(auth: IAuth, user: ISignInUserReq): Promise<ISignInRes> {
  const result = validationScheme.validate(user);
  if (result.error) return {ok: false, errors: [result.error]};

  return auth
    .signIn(user.email, user.password)
    .then(({token}) => {
      return {ok: true, errors: [], token};
    })
    .catch(err => {
      return {ok: false, errors: [err]};
    });
}
