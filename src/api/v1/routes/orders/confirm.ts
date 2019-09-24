import {ICommonRes} from "../../../../types/api/responses";
import {validateObject} from "../../../../utils/utils";
import {IDBInstance} from "../../../../types/api/dtos";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";

export async function ordersConfirmCtr(params: IDBInstance): Promise<ICommonRes> {
  return validateObject(params, dbInstanceValidationScheme).then(() => {
    return {
      ok: true,
    } as ICommonRes;
  });
}
