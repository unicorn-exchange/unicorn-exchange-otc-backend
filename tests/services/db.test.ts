import {MockEnv} from "../test_utils";
import {connectToDB} from "../../src/services/db";

const sequelize = connectToDB(MockEnv);

describe("Database test", () => {
  it("should connect to database", () => {
    return sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  });
});
