import {validateObject} from "../src/utils/utils";
import {mockOrderCreateValid, mockUserInvalid} from "./test_utils";
import {signUpValidationScheme} from "../src/types/validators/sign-up-validator";
import {toCurrencyType} from "../src/api/v1/routes/orders/orders-create.ctr";
import {IOrderWriteDTO} from "../src/types/api/dtos";
import {orderCommonFields} from "../src/types/enums/forms/order";
import {CurrencyTypes} from "../src/types/enums/currency-types";

describe("Utils tests", () => {
  it("should validate object scheme", () => {
    return validateObject(mockUserInvalid, signUpValidationScheme)
      .then(v => expect(v).not.toBeDefined())
      .catch(err => expect(err).toBeDefined());
  });

  it("should cast currency type", () => {
    return toCurrencyType(mockOrderCreateValid)
      .then(v => expect(v).toBeDefined())
      .catch(err => expect(err).not.toBeDefined());
  });

  it("should failed to cast currency type", () => {
    const orderDto = {
      [orderCommonFields.currencyBuy]: {
        id: 1,
        type: "wrong type" as CurrencyTypes,
      },
      [orderCommonFields.currencySell]: {
        id: 1,
        type: CurrencyTypes.cryptoCurrency,
      },
    } as IOrderWriteDTO;
    return toCurrencyType(orderDto)
      .then(v => expect(v).not.toBeDefined())
      .catch(err => expect(err).toBeDefined());
  });
});
