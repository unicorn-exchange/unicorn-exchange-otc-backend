import {IDBInstance, IOrderDTO} from "../../../../types/api/dtos";
import {OrderModel} from "../../../../types/models/order.model";
import {validateObject} from "../../../../utils/utils";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";

export async function ordersRequestCtr(params: IDBInstance): Promise<IOrderDTO> {
  return validateObject(params, dbInstanceValidationScheme)
    .then(() => OrderModel.findByPk(params.id))
    .then(order => {
      if (!order) {
        throw new Error("Order is not found");
      }
      return order.toJSON();
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
