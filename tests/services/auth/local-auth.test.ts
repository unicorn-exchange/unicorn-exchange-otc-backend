import {mockBaseCtx, mockEnv, mockUserValid} from "../../test_utils";
import {createDB} from "../../../src/services/db";
import {LocalAuth} from "../../../src/services/auth/local-auth";
import {initModels} from "../../../src/models";

const db = createDB(mockBaseCtx);

describe("Local auth service test", () => {
  beforeAll(() => initModels(db, mockEnv));

  it("should create a user with valid token", () => {
    const auth = new LocalAuth(mockBaseCtx, db);
    return auth
      .signUp(mockUserValid)
      .then(res => {
        expect(res.user.email).toBe(mockUserValid.email);
        return auth.signIn(mockUserValid.email, mockUserValid.password)
      })
      .then((res) => {
        expect(res.user.password).not.toBe(mockUserValid.password);
        return res;
      });
  });
});
