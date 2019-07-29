import {mockEnv} from "../test_utils";
import {initDBConnection} from "../../src/services/db";
import {UserModel} from "../../src/models/user.model";
import {initModels} from "../../src/models";

describe("Database test",() => {
  // it("should connect to database", () => {
  //   return db.connection
  //     .authenticate()
  //     .then(() => {
  //       console.log('Connection has been established successfully.');
  //     });
  // });

  it("should be able to manipulate with models", () => {
    return initDBConnection(mockEnv)
      .then(initModels)
      .then(() => {
        return UserModel
          .findAll()
          .then(a => {
            expect(true).toBe(true);
            return a
          });
      });
  });
});
