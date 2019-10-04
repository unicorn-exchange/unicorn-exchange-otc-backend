import {OrderModel} from "../../../../types/models/order.model";
import {IDBInstance, IFullOrderDTO} from "../../../../types/api/dtos";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";
import {validateObject} from "../../../../utils/utils";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";
import {BlockchainModel} from "../../../../types/models/blockchain.model";
import {CountryModel} from "../../../../types/models/country.model";
import {UserModel} from "../../../../types/models/user.model";

export async function ordersGetOneCtr(params: IDBInstance): Promise<IFullOrderDTO> {
  return validateObject(params, dbInstanceValidationScheme)
    .then(() =>
      OrderModel.findByPk(params.id, {
        include: [
          {model: BlockchainModel, as: "cryptoCurrencyBuy"},
          {model: BlockchainModel, as: "cryptoCurrencySell"},
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
      return orderInstance.toJSON();
      // return {
      //   ok: true,
      //   ...orderInstance.toJSON(),
      // } as IFullOrderDTO;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}
