import {IEnv} from "../src/env";
import {IBaseContext} from "../src/interfaces/IContext";
import {defaultLogger} from "../src/utils/logger";
import {IOrdersCreateReq, ISignUpUserReq} from "../src/types/api/requests";
import {OrdersCreateFields} from "../src/types/enums/forms/orders-create";

interface IEnvTest extends IEnv {
  SQLITE_STORAGE: string;
}

export const mockEnv: IEnvTest = {
  DB_HOST: "",
  DB_NAME: "",
  DB_PASSWORD: "",
  DB_USERNAME: "",
  SQLITE_STORAGE: "db.sqlite",
  IS_PRODUCTION: false,
  JWT_SECRET: "secret",
  PORT: 3000,
};

export const mockUserInvalid: ISignUpUserReq = {
  email: "invalid",
  password: "invalid",
  username: "invalid",
};

export const mockUserValid: ISignUpUserReq = {
  email: "test1@google.com",
  password: "password1",
  username: "username1",
};

export const mockOrderValid: IOrdersCreateReq = {
  [OrdersCreateFields.countryId]: 1,
  [OrdersCreateFields.cryptoCurrencySellId]: 1,
  [OrdersCreateFields.cryptoCurrencySellPrice]: "string",
  [OrdersCreateFields.cryptoCurrencyBuyId]: 1,
  [OrdersCreateFields.cryptoCurrencyBuyPrice]: "string",
  [OrdersCreateFields.paymentMethodId]: 1,
  [OrdersCreateFields.bankName]: "string",
  [OrdersCreateFields.marginProfit]: "string",
  [OrdersCreateFields.isAutoAdjustTransactionLimit]: "string",
  [OrdersCreateFields.termsOfTrade]: "string",
  [OrdersCreateFields.isVerifiedUsersOnly]: "string",
  [OrdersCreateFields.isTrustedUsersOnly]: "string",
  [OrdersCreateFields.isIdentifyUsersBeforeContinueTrade]: "string",
};

export const mockBaseCtx: IBaseContext = {
  logger: defaultLogger,
  env: mockEnv,
};
