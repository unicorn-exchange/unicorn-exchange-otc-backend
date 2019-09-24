import {OrderModel} from "../../../../types/models/order.model";
import {ICommonRes} from "../../../../types/api/responses";
import {IDBInstance} from "../../../../types/api/dtos";
import {validateObject} from "../../../../utils/utils";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";

export function ordersDeclineCtr(params: IDBInstance): Promise<ICommonRes> {
  return validateObject(params, dbInstanceValidationScheme)
    .then(() => OrderModel.findById(params.id))
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
