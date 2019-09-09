import * as yup from "yup";
import {signUpFields} from "../enums/forms/sign-up";

export const signUpValidationScheme = {
  [signUpFields.username]: yup
    .string()
    .min(3)
    .required(),
  [signUpFields.email]: yup
    .string()
    .email()
    .required(),
  [signUpFields.password]: yup
    .string()
    .min(3)
    .required(),
};
