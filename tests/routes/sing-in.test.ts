import {signInCtr} from "../../src/api/v1/routes/auth/sign-in";
import {LocalAuth} from "../../src/services/auth/local-auth";
import {beforeAllCommon, mockBaseCtx, mockUserInvalid, mockUserValid1} from "../test_utils";
import {createDB} from "../../src/services/db";

const db = createDB(mockBaseCtx);
const auth = new LocalAuth(mockBaseCtx, db);

describe("Sign in route test", () => {
  beforeAll(() => beforeAllCommon(db));

  it("should fail due to joi validation", async () => {
    const {ok, errors} = await signInCtr(auth, mockUserInvalid);
    expect(ok).toBeFalsy();
    expect(errors!.length).toEqual(1);
  });
  it("should fail due password validation", async () => {
    const {ok, errors} = await signInCtr(auth, mockUserInvalid);
    expect(ok).toBeFalsy();
    expect(errors!.length).toEqual(1);
  });
  it("should pass", async () => {
    const {ok, errors} = await signInCtr(auth, mockUserValid1);
    expect(ok).toBeTruthy();
    expect(errors!.length).toEqual(0);
  });
});