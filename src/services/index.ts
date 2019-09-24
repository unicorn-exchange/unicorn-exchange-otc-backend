import {LocalAuth} from "./auth/local-auth";
import {IAuth} from "../interfaces/IAuth";
import {IErrorReporter} from "../interfaces/IErrorReporter";
import {IMailer} from "../interfaces/IMailer";
import {ErrorReporter} from "./error-reporter";
import {Mailer} from "./mailer";
import {Sequelize} from "sequelize-typescript";
import {IBaseContext} from "../interfaces/IContext";
import {Wallet} from "./wallet/Wallet";

export interface IServices {
  auth: IAuth;
  errorReporter: IErrorReporter;
  mailer: IMailer;
  wallet: Wallet;
  db: Sequelize;
}

export async function initServices(ctx: IBaseContext, db: Sequelize): Promise<IServices> {
  return {
    errorReporter: new ErrorReporter(ctx),
    mailer: new Mailer(ctx),
    wallet: new Wallet({network: ctx.env.BLOCKCHAIN_NETWORK}),
    auth: new LocalAuth(ctx, db),
    db,
  };
}
