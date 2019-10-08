import {ICommonRes} from "../../../../types/api/responses";
import {validateObject} from "../../../../utils/utils";
import {IDepositReq} from "../../../../types/api/requests";
import {userDepositValidationScheme} from "../../../../types/validators/deposit-validator";

export async function depositCtr(params: IDepositReq): Promise<ICommonRes> {
  return validateObject(params, userDepositValidationScheme)
    .then(() => {
      return {
        ok: true,
      } as ICommonRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}

export function abstractCheckInterval(address: string, amount: number): boolean {
  return true;
}
