import Joi from "@hapi/joi";
import {ISignUpUserInput} from "../../../../interfaces/IUser";
import {ICommonResponse} from "../../../../types/api-doc";
import {IAuth} from "../../../../interfaces/IAuth";

export const validationScheme = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export interface ISignUpResponse extends ICommonResponse {
  token?: string;
}

export async function signUpCtr(auth: IAuth, user: ISignUpUserInput): Promise<ISignUpResponse> {
  const result = validationScheme.validate(user);
  if (result.error) throw result.error;

  const {ok} = await auth.signUp(user);

  return {ok};
}
