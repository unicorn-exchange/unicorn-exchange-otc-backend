import {ISignUpUserReq} from "./requests";
import {ValidationError} from "yup";
import {ICountryDTO, ICryptoCurrencyDTO, IDBInstance, IOrderDTO, IPaymentMethodDTO} from "./dtos";

export interface ICommonRes {
  ok: boolean;
  errors?: ValidationError[];
}

export interface ISignInUserWithTokenRes {
  token: string;
}

export interface ISignInUserRes extends ISignUpUserReq, IDBInstance {}

export interface ISettingsCommonRes extends ICommonRes {
  cryptoCurrencies: ICryptoCurrencyDTO[];
  countries: ICountryDTO[];
  paymentMethods: IPaymentMethodDTO[];
}

export interface ISignUpRes extends ICommonRes {
  token?: string;
}

export interface ISignInRes extends ICommonRes {
  token?: string;
}

export interface IOrdersCreateRes extends ICommonRes, IDBInstance {
  payload?: IOrderDTO;
}

export interface IOrdersRes extends ICommonRes {
  payload?: IOrderDTO[];
  count: number;
}
