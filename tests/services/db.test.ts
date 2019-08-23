import {mockBaseCtx, mockEnv} from "../test_utils";
import {createDB, initModels} from "../../src/services/db";
import {UserModel} from "../../src/types/models/user.model";

const db = createDB(mockBaseCtx);

describe("Database test", () => {
  it("should connect to database", () => {
    return db.authenticate().then(() => {
      expect(db).toBeDefined();
    });
  });

  it("should be able to manipulate with models", () => {
    return initModels(db, mockEnv).then(() => {
      return UserModel.findAll().then(users => {
        expect(Array.isArray(users)).toBe(true);
      });
    });
  });
});
