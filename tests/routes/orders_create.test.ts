import {mockBaseCtx, mockEnv, mockOrderValid} from "../test_utils";
import {createDB, initModels} from "../../src/services/db";
import {ordersCreateCtr} from "../../src/api/v1/routes/orders/create";
import {IOrderDTO} from "../../src/types/api/dtos";

const db = createDB(mockBaseCtx);

describe("Settings common route test", () => {
  it("should create an order", async () => {
    return initModels(db, mockEnv).then(async () => {
      const res = await ordersCreateCtr(mockOrderValid);
      expect(res.ok).toBeTruthy();
      expect(res.payload).toBeDefined();
      Object.keys(mockOrderValid).forEach(key => {
        if (res.payload) {
          expect(res.payload[key as keyof IOrderDTO]).toEqual(mockOrderValid[key as keyof IOrderDTO]);
        }
      });
    });
  });
});
