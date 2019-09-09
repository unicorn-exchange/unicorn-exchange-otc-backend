import {ordersCreateFields} from "../enums/forms/orders-create";

export interface IOrdersCreateReq {
  [ordersCreateFields.countryId]: number;
  [ordersCreateFields.cryptoCurrencySellId]: number;
  [ordersCreateFields.cryptoCurrencySellPrice]: string;
  [ordersCreateFields.cryptoCurrencyBuyId]: number;
  [ordersCreateFields.cryptoCurrencyBuyPrice]: string;
  [ordersCreateFields.paymentMethodId]: number;
  [ordersCreateFields.bankName]: string;
  [ordersCreateFields.marginProfit]: string;
  [ordersCreateFields.isAutoAdjustTransactionLimit]: string;
  [ordersCreateFields.termsOfTrade]: string;
  [ordersCreateFields.isVerifiedUsersOnly]: string;
  [ordersCreateFields.isTrustedUsersOnly]: string;
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: string;
}

export interface IPagination {
  offset?: number;
  limit?: number;
}

export interface IOrdersReq extends IPagination {}

export interface ISignInUserReq {
  email: string;
  password: string;
}

export interface ISignUpUserReq extends ISignInUserReq {
  username: string;
}
