import {validateObject} from "../src/utils/utils";
import {mockUserInvalid} from "./test_utils";
import {signUpValidationScheme} from "../src/types/validators/sign-up-validator";

describe("Utils tests", () => {
  it("should validate object scheme", () => {
    return validateObject(mockUserInvalid, signUpValidationScheme)
      .then(v => expect(v).not.toBeDefined())
      .catch(err => expect(err).toBeDefined());
  });
});
