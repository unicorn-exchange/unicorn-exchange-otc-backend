import Joi, {ValidationError} from "@hapi/joi";
import {ISignUpUserInput} from "../../../../interfaces/IUser";
import {ICommonResponse} from "../../../../types/api-doc";
import {IAuth} from "../../../../interfaces/IAuth";

export const validationScheme = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export interface ISignUpResponse extends ICommonResponse {
  errors: Array<ValidationError>
  token?: string;
}

export async function signUpCtr(auth: IAuth, user: ISignUpUserInput): Promise<ISignUpResponse> {
  const result = validationScheme.validate(user);
  if (result.error) return {ok: false, errors: [result.error]};

  return auth
    .signUp(user)
    .then(({ok}) => {
      return {ok, errors: []};
    })
    .catch(err => {
      return {ok: false, errors: [err]};
    });
}
