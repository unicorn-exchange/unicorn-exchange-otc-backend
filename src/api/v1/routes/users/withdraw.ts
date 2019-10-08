import {IOrdersCreateRes} from "../../../../types/api/responses";
import {ordersCreateValidationScheme} from "../../../../types/validators/orders-create-validator";
import {validateObject} from "../../../../utils/utils";
import {IOrderWriteDTO} from "../../../../types/api/dtos";

export async function depositCtr(params: IOrderWriteDTO): Promise<IOrdersCreateRes> {
  return validateObject(params, ordersCreateValidationScheme)
    .then(() => {
      return {
        ok: true,
      } as IOrdersCreateRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
