import {mockBaseCtx, mockEnv, mockOrderValid} from "../test_utils";
import {createDB, initModels} from "../../src/services/db";
import {ordersCreateCtr} from "../../src/api/v1/routes/orders/create";
import {IOrdersCreateReq} from "../../src/types/api/requests";

const db = createDB(mockBaseCtx);

describe("Settings common route test", () => {
  it("should create an order", async () => {
    return initModels(db, mockEnv).then(async () => {
      const res = await ordersCreateCtr(mockOrderValid);
      expect(res.ok).toBeTruthy();
      expect(res.data).toBeDefined();
      Object.keys(mockOrderValid).forEach(key => {
        if (res.data) {
          expect(res.data[key as keyof IOrdersCreateReq]).toEqual(mockOrderValid[key as keyof IOrdersCreateReq]);
        }
      });
    });
  });
});
