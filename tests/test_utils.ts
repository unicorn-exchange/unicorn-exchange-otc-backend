import {IEnv} from "../src/env";
import {ISignUpUserInput} from "../src/interfaces/IUser";

interface IEnvTest extends IEnv {
  SQLITE_STORAGE: string;
}

export const mockEnv: IEnvTest = {
  DB_HOST: "",
  DB_NAME: "",
  DB_PASSWORD: "",
  DB_USERNAME: "",
  SQLITE_STORAGE: "./db.sqlite",
  IS_PRODUCTION: false,
  JWT_SECRET: "secret",
  PORT: 3000
};

export const mockUser: ISignUpUserInput = {
  email: "test@google.com",
  password: "password",
  username: "username",
};
