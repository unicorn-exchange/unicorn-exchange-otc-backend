import {OrderModel} from "../../../../types/models/order.model";
import {IDBInstance} from "../../../../types/api/dtos";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";
import {validateObject} from "../../../../utils/utils";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";
import {BlockchainModel} from "../../../../types/models/blockchain.model";
import {CountryModel} from "../../../../types/models/country.model";
import {UserModel} from "../../../../types/models/user.model";
import {orderReadFields} from "../../../../types/enums/forms/order";
import {IOrderRes} from "../../../../types/api/responses";

export async function ordersGetOneCtr(params: IDBInstance): Promise<IOrderRes> {
  return validateObject(params, dbInstanceValidationScheme)
    .then(() =>
      OrderModel.findByPk(params.id, {
        include: [
          {model: BlockchainModel, as: orderReadFields.cryptoCurrencyBuy},
          {model: BlockchainModel, as: orderReadFields.cryptoCurrencySell},
          UserModel,
          PaymentMethodModel,
          CountryModel,
        ],
      }),
    )
    .then(orderInstance => {
      if (!orderInstance) {
        throw new Error("No");
      }
      return {
        ok: true,
        payload: orderInstance.toJSON(),
      } as IOrderRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
