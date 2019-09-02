import {ISignUpUserReq} from "./requests";
import {ValidationError} from "@hapi/joi";

export interface ICommonResponse {
  ok: boolean;
  serverTime?: number;
  description?: string;
}

export interface ISignInUserWithTokenRes {
  token: string;
}

export interface ISignInUserRes extends ISignUpUserReq {
  id?: number;
}

export interface ICryptoCurrencyRes {
  id: number;
  title: string;
}

export interface ICountryRes {
  id: number;
  title: string;
}

export interface IPaymentMethodRes {
  id: number;
  title: string;
}

export interface ISettingsCommonRes extends ICommonResponse {
  cryptoCurrencies: ICryptoCurrencyRes[];
  countries: ICountryRes[];
  paymentMethods: IPaymentMethodRes[];
}

export interface ISignUpRes extends ICommonResponse {
  errors: Array<ValidationError>;
  token?: string;
}

export interface ISignInRes extends ICommonResponse {
  errors: Array<ValidationError>;
  token?: string;
}
