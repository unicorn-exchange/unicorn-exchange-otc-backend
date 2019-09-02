import Joi from "@hapi/joi";
import {IAuth} from "../../../../interfaces/IAuth";
import {ISignUpRes} from "../../../../types/api/responses";
import {ISignUpUserReq} from "../../../../types/api/requests";

export const validationScheme = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});

export async function signUpCtr(auth: IAuth, user: ISignUpUserReq): Promise<ISignUpRes> {
  const result = validationScheme.validate(user);
  if (result.error) return {ok: false, errors: [result.error]};

  return auth
    .signUp(user)
    .then(({user, token}) => {
      return {ok: true, user, token, errors: []};
    })
    .catch(err => {
      return {ok: false, errors: [err]};
    });
}
