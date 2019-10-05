import {orderCommonFields} from "../enums/forms/order";

export interface IDBInstance {
  id?: number;
}

export interface IUserDTO extends IDBInstance {
  email: string;
  username: string;
}

export interface ICryptoCurrencyDTO extends IDBInstance {
  title: string;
}

export interface ICurrencyDTO extends IDBInstance {
  title: string;
}

export interface ICountryDTO extends IDBInstance {
  title: string;
}

export interface IPaymentMethodDTO extends IDBInstance {
  title: string;
}

export interface IOrderCommonDTO extends IDBInstance {
  [orderCommonFields.cryptoCurrencySellPrice]: number;
  [orderCommonFields.cryptoCurrencyBuyPrice]: number;
  [orderCommonFields.bankName]: string;
  [orderCommonFields.marginProfit]: number;
  [orderCommonFields.termsOfTrade]: string;
  [orderCommonFields.isAutoAdjustTransactionLimit]: boolean;
  [orderCommonFields.isVerifiedUsersOnly]: boolean;
  [orderCommonFields.isTrustedUsersOnly]: boolean;
  [orderCommonFields.isIdentifyUsersBeforeContinueTrade]: boolean;
}

export interface IOrderDTO extends IOrderCommonDTO {
  [orderCommonFields.countryId]: number;
  [orderCommonFields.cryptoCurrencySellId]: number;
  [orderCommonFields.cryptoCurrencyBuyId]: number;
  [orderCommonFields.paymentMethodId]: number;
}

export interface IFullOrderDTO extends IDBInstance {
  user: IUserDTO;
  cryptoCurrencyBuy: ICryptoCurrencyDTO;
  cryptoCurrencySell: ICryptoCurrencyDTO;
  currency: ICurrencyDTO;
  paymentMethod: IPaymentMethodDTO;
  country: ICountryDTO;
}
