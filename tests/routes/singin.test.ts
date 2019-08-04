import {signInCtr} from "../../src/api/v1/routes/auth/signin";
import {LocalAuth} from "../../src/services/auth/local-auth";
import {defaultLogger} from "../../src/utils/logger";
import {mockBaseCtx, mockEnv, mockUserInvalid, mockUserValid} from "../test_utils";

const auth = new LocalAuth(mockBaseCtx);

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
