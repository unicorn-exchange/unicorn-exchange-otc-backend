import {signInCtr} from "../../src/api/v1/routes/auth/signin";
import {Auth} from "../../src/services/auth";
import {defaultLogger} from "../../src/utils/logger";
import {mockEnv, mockUserInvalid, mockUserValid} from "../test_utils";

const auth = new Auth(defaultLogger, mockEnv);

describe("Sign in route test", () => {
  it("should fail due to joi validation", async () => {
    const {ok, errors} = await signInCtr(auth, mockUserInvalid);
    expect(ok).toBeFalsy();
    expect(errors.length).toEqual(1);
  });
  it("should fail due password validation", async () => {
    const {ok, errors} = await signInCtr(auth, mockUserInvalid);
    expect(ok).toBeFalsy();
    expect(errors.length).toEqual(1);
  });
  it("should pass", async () => {
    const {ok, errors} = await signInCtr(auth, {email: "valid@mail.com", password: "password"});
    expect(ok).toBeTruthy();
    expect(errors.length).toEqual(0);
  });
});
