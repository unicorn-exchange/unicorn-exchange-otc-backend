import {IOrdersReq} from "../../../../types/api/requests";
import {IOrdersRes} from "../../../../types/api/responses";
import {OrderModel} from "../../../../types/models/order.model";
import {paginationFields} from "../../../../types/enums/forms/pagination";
import {defaultPagination} from "../../../../types/validators/pagination-validator";
import {BlockchainModel} from "../../../../types/models/blockchain.model";
import {orderReadFields} from "../../../../types/enums/forms/order";
import {UserModel} from "../../../../types/models/user.model";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";
import {CountryModel} from "../../../../types/models/country.model";

export async function ordersGetAllCtr(query: IOrdersReq = defaultPagination): Promise<IOrdersRes> {
  return OrderModel.findAndCountAll({
    limit: query[paginationFields.limit],
    offset: query[paginationFields.offset],
    include: [
      {model: BlockchainModel, as: orderReadFields.cryptoCurrencyBuy},
      {model: BlockchainModel, as: orderReadFields.cryptoCurrencySell},
      UserModel,
      PaymentMethodModel,
      CountryModel,
    ],
  })
    .then(data => {
      return {
        payload: data.rows.map(i => i.toJSON()),
        ok: true,
        count: data.count,
      } as IOrdersRes;
    })
    .catch(err => {
      return {
        errors: [err],
        ok: false,
        count: 0,
      };
    });
}
