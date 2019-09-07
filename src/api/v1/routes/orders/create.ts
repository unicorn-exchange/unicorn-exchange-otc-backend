import {IOrdersCreateReq} from "../../../../types/api/requests";
import {OrderModel} from "../../../../types/models/order.model";
import {IOrdersCreateRes} from "../../../../types/api/responses";
import {ordersCreateValidationScheme} from "../../../../types/validators/orders-create-validator";
import * as yup from "yup";

export async function ordersCreateCtr(order: IOrdersCreateReq): Promise<IOrdersCreateRes> {
  return yup
    .object()
    .shape(ordersCreateValidationScheme)
    .isValid(order)
    .then(() => {
      return OrderModel.create(order).then(orderInstance => {
        return {
          ok: true,
          data: orderInstance.toJSON(),
          errors: [],
        };
      });
      // .catch(err => {
      //   return {
      //     ok: false,
      //     errors: [err],
      //   };
      // });
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
