import {IEnv} from "../env";
import {Logger} from "winston";
import {IServices} from "../services";
import {Sequelize} from "sequelize";

export interface IContext {
  env: IEnv;
  logger: Logger;
  services: IServices;
  db: Sequelize;
}
