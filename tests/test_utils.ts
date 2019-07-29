import {IEnv} from "../src/env";

interface IEnvTest extends IEnv {
  SQLITE_STORAGE: string;
}

export const MockEnv: IEnvTest = {
  DB_HOST: "",
  DB_NAME: "",
  DB_PASSWORD: "",
  DB_USERNAME: "",
  SQLITE_STORAGE: "./db.sqlite",
  IS_PRODUCTION: false,
  JWT_SECRET: "secret",
  PORT: 3000
};
