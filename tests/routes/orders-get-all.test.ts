import {beforeAllCommon, mockBaseCtx} from "../test_utils";
import {createDB} from "../../src/services/db";
import {ordersGetAllCtr} from "../../src/api/v1/routes/orders/orders-get-all.ctr";
import {orderReadFields} from "../../src/types/enums/forms/order";

const db = createDB(mockBaseCtx);

describe("Get list of orders tests", () => {
  beforeAll(() => beforeAllCommon(db));

  it("should get list of orders", async () => {
    const res = await ordersGetAllCtr();
    expect(res.ok).toBeTruthy();
    expect(res.errors).not.toBeDefined();
    expect(res.count).toBeGreaterThan(0);
    expect(Array.isArray(res.payload)).toBeTruthy();
    expect(res.payload!.length).toBeGreaterThan(0);
    const order = res.payload![0];
    expect(order.id).toBe(1);
    expect(order[orderReadFields.owner]).toBeDefined();
    expect(order[orderReadFields.country]).toBeDefined();
    expect(order[orderReadFields.cryptoCurrencySell]).toBeDefined();
    expect(order[orderReadFields.cryptoCurrencyBuy]).toBeDefined();
    expect(order[orderReadFields.paymentMethod]).toBeDefined();
  });
});
