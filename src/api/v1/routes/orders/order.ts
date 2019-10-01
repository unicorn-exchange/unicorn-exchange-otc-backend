import {OrderModel} from "../../../../types/models/order.model";
import {IOrdersCreateRes} from "../../../../types/api/responses";
import {ordersCreateValidationScheme} from "../../../../types/validators/orders-create-validator";
import {validateObject} from "../../../../utils/utils";
import {IDBInstance} from "../../../../types/api/dtos";

export async function orderCtr(params: IDBInstance): Promise<IOrdersCreateRes> {
  if (!params.id) {
    throw new Error("No id");
  }
  return validateObject(params, ordersCreateValidationScheme)
    .then(() => OrderModel.create(params))
    .then(orderInstance => {
      return {
        ok: true,
        payload: orderInstance,
      } as IOrdersCreateRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
