import {beforeAllCommon, mockBaseCtx} from "../test_utils";
import {createDB} from "../../src/services/db";
import {ordersGetOneCtr} from "../../src/api/v1/routes/orders/orders-get-one.ctr";

const db = createDB(mockBaseCtx);

describe("Full order tests", () => {
  beforeAll(() => beforeAllCommon(db));

  it("should get one full order", async () => {
    const res = await ordersGetOneCtr({id: 1});
    // expect(res.ok).toBeTruthy();
    // expect(res.errors!.length).toEqual(0);
    expect(res.country).toBeDefined();
    expect(res.cryptoCurrencyBuy).toBeDefined();
    expect(res.cryptoCurrencySell).toBeDefined();
    expect(res.paymentMethod).toBeDefined();
    // expect(res.currency).toBeDefined();

    // Object.keys(mockOrderValid).forEach(key => {
    //   if (res.payload) {
    //     expect(res.payload[key as keyof IOrderDTO]).toEqual(mockOrderValid[key as keyof IOrderDTO]);
    //   }
    // });
  });
});
