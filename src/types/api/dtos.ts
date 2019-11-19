import {orderCommonFields, orderReadFields, orderWriteFields} from "../enums/forms/order";
import {CurrencyTypes} from "../enums/currency-types";
import {mongoId, sqlId} from "../types";

export interface IDBInstance {
  id?: sqlId;
}

export interface IMongoInstance {
  _id?: mongoId;
}

export interface IUserDTO extends IDBInstance {
  email: string;
  username: string;
  password: string;
  rating: number;
  dealsCount: number;
}

export interface ICryptoCurrencyDTO extends IDBInstance {
  title: string;
}

export interface IFiatDTO extends IDBInstance {
  title: string;
}

export interface ICurrencyDTO extends IFiatDTO, ICryptoCurrencyDTO {
  type: CurrencyTypes;
}

export interface ICountryDTO extends IDBInstance {
  title: string;
}

export interface IPaymentMethodDTO extends IDBInstance {
  title: string;
}

export interface IBaseMessage {
  text: string;
  receiverUserIds: string[];
}

export interface IChatMessage extends IBaseMessage, IMongoInstance {
  reply?: boolean;
  date?: any; // TODO: How to store date?
  fromUserId: sqlId;
  state?: string;
  type?: string;
  quote?: string;
  files?: any;
  isRead?: boolean;
}

export interface IChat {
  /**
   * List of users in chat
   */
  userIds: sqlId[];

  /**
   * Specific HEX string created from users list
   */
  hex: string;

  /**
   * List of messages in chat
   */
  messages: IChatMessage[];
}

export interface IOrderCommonDTO extends IDBInstance {
  [orderCommonFields.currencySellPrice]: number;
  [orderCommonFields.currencyBuyPrice]: number;
  [orderCommonFields.bankName]: string;
  [orderCommonFields.marginProfit]: number;
  [orderCommonFields.termsOfTrade]: string;
  [orderCommonFields.isAutoAdjustTransactionLimit]: boolean;
  [orderCommonFields.isVerifiedUsersOnly]: boolean;
  [orderCommonFields.isTrustedUsersOnly]: boolean;
  [orderCommonFields.isIdentifyUsersBeforeContinueTrade]: boolean;
  [orderCommonFields.currencySell]: ICurrencyDTO;
  [orderCommonFields.currencyBuy]: ICurrencyDTO;
}

export interface IOrderWriteDTO extends IOrderCommonDTO {
  [orderWriteFields.countryId]: number;
  [orderWriteFields.paymentMethodId]: number;
}

export interface IFullOrderDTO extends IOrderCommonDTO {
  [orderReadFields.owner]: IUserDTO;
  [orderReadFields.paymentMethod]: IPaymentMethodDTO;
  [orderReadFields.country]: ICountryDTO;
}

// Order with less amount of data to reduce payload
export interface IPartOrderDTO extends IFullOrderDTO {}
