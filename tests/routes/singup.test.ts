import {Auth} from "../../src/services/auth";
import {defaultLogger} from "../../src/utils/logger";
import {mockEnv, mockUser} from "../test_utils";
import {signUpCtr} from "../../src/api/v1/routes/auth/signup";
import {initDBConnection} from "../../src/services/db";
import {Transaction} from "sequelize";
import {UserModel} from "../../src/models/user.model";

const db = initDBConnection(mockEnv);
const auth = new Auth(defaultLogger, mockEnv);

let transaction: any;
describe("Signup in route test", () => {
  beforeAll(() => {
    return db.transaction(t => {
      transaction = t;
      return Promise.resolve();
    });
  });

  it("should create new user", async () => {
    const {ok, errors} = await signUpCtr(auth, mockUser);
    db.define("user", UserModel)
    // db.import('project', (sequelize, DataTypes) => {
    //   class Project extends sequelize.Model {}
    //   Project.init({
    //     name: DataTypes.STRING,
    //     description: DataTypes.TEXT
    //   }, { sequelize })
    //   return Project;
    // })

    expect(ok).toBeFalsy();
    expect(errors.length).toEqual(1);
  });

  afterAll(() => {
    // return new Promise(resolve => {
    //   resolve();
    // })
    // return initializeCityDatabase();
    return transaction.revert();
  });
});
