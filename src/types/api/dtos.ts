import {ordersCreateFields} from "../enums/forms/orders-create";

export interface IDBInstance {
  id?: number;
}

export interface IOrderDTO extends IDBInstance {
  [ordersCreateFields.countryId]: number;
  [ordersCreateFields.cryptoCurrencySellId]: number;
  [ordersCreateFields.cryptoCurrencySellPrice]: number;
  [ordersCreateFields.cryptoCurrencyBuyId]: number;
  [ordersCreateFields.cryptoCurrencyBuyPrice]: number;
  [ordersCreateFields.paymentMethodId]: number;
  [ordersCreateFields.bankName]: string;
  [ordersCreateFields.marginProfit]: number;
  [ordersCreateFields.termsOfTrade]: string;
  [ordersCreateFields.isAutoAdjustTransactionLimit]: boolean;
  [ordersCreateFields.isVerifiedUsersOnly]: boolean;
  [ordersCreateFields.isTrustedUsersOnly]: boolean;
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: boolean;
}

export interface ICryptoCurrencyDTO extends IDBInstance {
  title: string;
}

export interface ICountryDTO extends IDBInstance {
  title: string;
}

export interface IPaymentMethodDTO extends IDBInstance {
  title: string;
}
