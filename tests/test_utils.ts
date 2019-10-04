import {IEnv} from "../src/env";
import {IBaseContext} from "../src/interfaces/IContext";
import {defaultLogger} from "../src/utils/logger";
import {ISignUpUserReq} from "../src/types/api/requests";
import {ordersCreateFields} from "../src/types/enums/forms/orders-create";
import {IOrderDTO} from "../src/types/api/dtos";
import {initModels} from "../src/services/db";
import {Sequelize} from "sequelize-typescript";

export function beforeAllCommon(db: Sequelize) {
  jest.setTimeout(30000);
  return initModels(db, mockEnv).then(db => db.transaction());
}

interface IEnvTest extends IEnv {
  SQLITE_STORAGE: string;
}

export const mockEnv: IEnvTest = {
  BLOCKCHAIN_NETWORK: "test",
  DB_DIALECT: "sqlite",
  DB_HOST: "",
  DB_NAME: "",
  DB_PASSWORD: "",
  DB_USERNAME: "",
  SQLITE_STORAGE: "db.sqlite",
  IS_PRODUCTION: false,
  IS_FORCE_DB_SYNC: false,
  JWT_SECRET: "secret",
  PORT: 3000,
};

export const mockUserInvalid: ISignUpUserReq = {
  email: "invalid",
  password: "invalid",
  username: "invalid",
};

export const mockUserValid1: ISignUpUserReq = {
  email: "test1@google.com",
  password: "password1",
  username: "username1",
};

export const mockUserValid2: ISignUpUserReq = {
  email: "test2@google.com",
  password: "password2",
  username: "username2",
};

export const mockOrderValid: IOrderDTO = {
  [ordersCreateFields.countryId]: 1,
  [ordersCreateFields.cryptoCurrencySellId]: 1,
  [ordersCreateFields.cryptoCurrencySellPrice]: 1,
  [ordersCreateFields.cryptoCurrencyBuyId]: 1,
  [ordersCreateFields.cryptoCurrencyBuyPrice]: 1,
  [ordersCreateFields.paymentMethodId]: 1,
  [ordersCreateFields.bankName]: "string",
  [ordersCreateFields.marginProfit]: 1,
  [ordersCreateFields.isAutoAdjustTransactionLimit]: true,
  [ordersCreateFields.termsOfTrade]: "string",
  [ordersCreateFields.isVerifiedUsersOnly]: true,
  [ordersCreateFields.isTrustedUsersOnly]: true,
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: true,
};

export const mockBaseCtx: IBaseContext = {
  logger: defaultLogger,
  env: mockEnv,
};
