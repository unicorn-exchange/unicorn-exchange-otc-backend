import {IOrdersCreateReq} from "../../../../types/api/requests";
import {OrderModel} from "../../../../types/models/order.model";
import {IOrdersCreateRes} from "../../../../types/api/responses";
import {ordersCreateValidationScheme} from "../../../../types/validators/orders-create-validator";

export async function ordersCreateCtr(order: IOrdersCreateReq): Promise<IOrdersCreateRes> {
  const result = ordersCreateValidationScheme.validate(order);
  if (result.error) {
    return {
      ok: false,
      errors: [result.error],
    };
  }

  return OrderModel.create(order)
    .then(orderInstance => {
      return {
        ok: true,
        data: orderInstance.toJSON(),
        errors: [],
      };
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
