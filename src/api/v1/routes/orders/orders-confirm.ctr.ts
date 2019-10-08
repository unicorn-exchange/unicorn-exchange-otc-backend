import {ICommonRes} from "../../../../types/api/responses";
import {validateObject} from "../../../../utils/utils";
import {IDBInstance} from "../../../../types/api/dtos";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";
import {UserModel} from "../../../../types/models/user.model";
import {QueryInterfaceOptions} from "sequelize";

export async function ordersConfirmCtr(
  currentUser: UserModel,
  params: IDBInstance,
  options?: QueryInterfaceOptions,
): Promise<ICommonRes> {
  return validateObject(params, dbInstanceValidationScheme).then(() => {
    return {
      ok: true,
    } as ICommonRes;
  });
}
