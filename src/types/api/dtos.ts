import {orderCommonFields, orderReadFields, orderWriteFields} from "../enums/forms/order";

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

export interface IOrderWriteDTO extends IOrderCommonDTO {
  [orderWriteFields.countryId]: number;
  [orderWriteFields.cryptoCurrencySellId]: number;
  [orderWriteFields.cryptoCurrencyBuyId]: number;
  [orderWriteFields.paymentMethodId]: number;
}

export interface IFullOrderDTO extends IOrderCommonDTO {
  [orderReadFields.owner]: IUserDTO;
  [orderReadFields.cryptoCurrencyBuy]: ICryptoCurrencyDTO;
  [orderReadFields.cryptoCurrencySell]: ICryptoCurrencyDTO;
  [orderReadFields.currency]: ICurrencyDTO;
  [orderReadFields.paymentMethod]: IPaymentMethodDTO;
  [orderReadFields.country]: ICountryDTO;
}

// Order with less amount of data to reduce payload
export interface IPartOrderDTO extends IFullOrderDTO {}
