import {Sequelize} from "sequelize-typescript";
import {mockEnv} from "../../tests/test_utils";
import path from "path";
import {IBaseContext} from "../interfaces/IContext";
import {UserModel} from "../types/models/user.model";
import {ROOT} from "../../config";
import {createNamespace} from "continuation-local-storage";
import {BlockchainModel} from "../types/models/blockchain.model";
import {CryptoAccountModel} from "../types/models/crypto-account.model";
import {CryptoKeyModel} from "../types/models/crypto-key.model";
import {OrderModel} from "../types/models/order.model";
import {IEnv} from "../env";
import {CountryModel} from "../types/models/country.model";
import {CurrencyModel} from "../types/models/currency.model";
import {PaymentMethodModel} from "../types/models/payment-method.model";
import {countries} from "../../data/countries";
import {blockchains} from "../../data/blockchains";
import {paymentMethods} from "../../data/payment-methods";
import {BulkCreateOptions} from "sequelize";

export async function initDBConnection(ctx: IBaseContext): Promise<Sequelize> {
  const db = createDB(ctx);

  return db.authenticate().then(() => db);
}

export function createDB(ctx: IBaseContext): Sequelize {
  const {env} = ctx;
  const storage = path.join(ROOT, "./tests", mockEnv.SQLITE_STORAGE);
  const namespace = createNamespace("transaction");
  Sequelize.useCLS(namespace);

  // @ts-ignore
  const sequelize = new Sequelize({
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    // eslint-disable-next-line no-console
    logging: console.log,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT ? env.DB_DIALECT : "sqlite",
    storage,
  });
  sequelize.addModels([
    BlockchainModel,
    CountryModel,
    CryptoAccountModel,
    CryptoKeyModel,
    CurrencyModel,
    OrderModel,
    PaymentMethodModel,
    UserModel,
  ]);
  return sequelize;
}

export function initModels(db: Sequelize, env: IEnv): Promise<Sequelize> {
  return db.sync({force: true});
}

export function initDefaultData(db: Sequelize, env: IEnv): Promise<Sequelize> {
  const options: BulkCreateOptions = {
    fields: ["id", "title"],
    updateOnDuplicate: ["title"],
  };
  let truncateFn = Promise.all([Promise.resolve()]); // TODO: Find better alternatives
  if (env.DB_DIALECT === "sqlite") {
    delete options.updateOnDuplicate;
    truncateFn = Promise.all([
      CountryModel.truncate({force: true}),
      BlockchainModel.truncate({force: true}),
      PaymentMethodModel.truncate({force: true}),
    ]);
  }
  return truncateFn.then(() => {
    return Promise.all([
      CountryModel.bulkCreate(countries, options),
      BlockchainModel.bulkCreate(blockchains, options),
      PaymentMethodModel.bulkCreate(paymentMethods, options),
    ]).then(() => db);
  });
}
