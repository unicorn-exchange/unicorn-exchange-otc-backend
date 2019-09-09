import {IEnv} from "../src/env";
import {IBaseContext} from "../src/interfaces/IContext";
import {defaultLogger} from "../src/utils/logger";
import {IOrdersCreateReq, ISignUpUserReq} from "../src/types/api/requests";
import {ordersCreateFields} from "../src/types/enums/forms/orders-create";

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
  [ordersCreateFields.countryId]: 1,
  [ordersCreateFields.cryptoCurrencySellId]: 1,
  [ordersCreateFields.cryptoCurrencySellPrice]: "string",
  [ordersCreateFields.cryptoCurrencyBuyId]: 1,
  [ordersCreateFields.cryptoCurrencyBuyPrice]: "string",
  [ordersCreateFields.paymentMethodId]: 1,
  [ordersCreateFields.bankName]: "string",
  [ordersCreateFields.marginProfit]: "string",
  [ordersCreateFields.isAutoAdjustTransactionLimit]: "string",
  [ordersCreateFields.termsOfTrade]: "string",
  [ordersCreateFields.isVerifiedUsersOnly]: "string",
  [ordersCreateFields.isTrustedUsersOnly]: "string",
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: "string",
};

export const mockBaseCtx: IBaseContext = {
  logger: defaultLogger,
  env: mockEnv,
};
