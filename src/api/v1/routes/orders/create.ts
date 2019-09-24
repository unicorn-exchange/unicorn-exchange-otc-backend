import {OrderModel} from "../../../../types/models/order.model";
import {IOrdersCreateRes} from "../../../../types/api/responses";
import {ordersCreateValidationScheme} from "../../../../types/validators/orders-create-validator";
import {validateObject} from "../../../../utils/utils";
import {IOrderDTO} from "../../../../types/api/dtos";

export async function ordersCreateCtr(params: IOrderDTO): Promise<IOrdersCreateRes> {
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
