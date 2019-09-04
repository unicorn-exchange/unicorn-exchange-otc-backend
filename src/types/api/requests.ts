import {OrdersCreateFields} from "../enums/forms/orders-create";

export interface IOrdersCreateReq {
  [OrdersCreateFields.countryId]: number;
  [OrdersCreateFields.cryptoCurrencySellId]: number;
  [OrdersCreateFields.cryptoCurrencySellPrice]: string;
  [OrdersCreateFields.cryptoCurrencyBuyId]: number;
  [OrdersCreateFields.cryptoCurrencyBuyPrice]: string;
  [OrdersCreateFields.paymentMethodId]: number;
  [OrdersCreateFields.bankName]: string;
  [OrdersCreateFields.marginProfit]: string;
  [OrdersCreateFields.isAutoAdjustTransactionLimit]: string;
  [OrdersCreateFields.termsOfTrade]: string;
  [OrdersCreateFields.isVerifiedUsersOnly]: string;
  [OrdersCreateFields.isTrustedUsersOnly]: string;
  [OrdersCreateFields.isIdentifyUsersBeforeContinueTrade]: string;
}

export interface ISignInUserReq {
  email: string;
  password: string;
}

export interface ISignUpUserReq extends ISignInUserReq {
  username: string;
}
