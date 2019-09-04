import {IOrdersCreateReq, ISignUpUserReq} from "./requests";
import {ValidationError} from "@hapi/joi";

export interface ICommonRes {
  ok: boolean;
  serverTime?: number;
  description?: string;
}

export interface IValidationErrorsRes {
  errors: Array<ValidationError>;
}

export interface ICommonDBInstance {
  id?: number;
}

export interface ISignInUserWithTokenRes {
  token: string;
}

export interface ISignInUserRes extends ISignUpUserReq, ICommonDBInstance {
}

export interface ICryptoCurrencyRes extends ICommonDBInstance {
  title: string;
}

export interface ICountryRes extends ICommonDBInstance {
  title: string;
}

export interface IPaymentMethodRes extends ICommonDBInstance {
  title: string;
}

export interface ISettingsCommonRes extends ICommonRes {
  cryptoCurrencies: ICryptoCurrencyRes[];
  countries: ICountryRes[];
  paymentMethods: IPaymentMethodRes[];
}

export interface ISignUpRes extends ICommonRes, IValidationErrorsRes {
  token?: string;
}

export interface ISignInRes extends ICommonRes, IValidationErrorsRes {
  token?: string;
}

export interface IOrdersCreateRes extends ICommonRes, IValidationErrorsRes, ICommonDBInstance {
  data?: IOrdersCreateReq;
}
