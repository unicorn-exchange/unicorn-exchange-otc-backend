import {OrderModel} from "../../../../types/models/order.model";
import {IOrdersCreateRes} from "../../../../types/api/responses";
import {ordersCreateValidationScheme} from "../../../../types/validators/orders-create-validator";
import {validateObject} from "../../../../utils/utils";
import {IOrderWriteDTO} from "../../../../types/api/dtos";
import {QueryInterfaceOptions} from "sequelize";

export async function ordersCreateCtr(
  params: IOrderWriteDTO,
  options?: QueryInterfaceOptions,
): Promise<IOrdersCreateRes> {
  return validateObject(params, ordersCreateValidationScheme)
    .then(() => OrderModel.create(params, options))
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
