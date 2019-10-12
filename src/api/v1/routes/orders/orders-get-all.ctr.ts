import {IOrdersReq} from "../../../../types/api/requests";
import {IOrdersRes} from "../../../../types/api/responses";
import {OrderModel} from "../../../../types/models/order.model";
import {paginationFields} from "../../../../types/enums/forms/pagination";
import {defaultPagination} from "../../../../types/validators/pagination-validator";
import {CryptoCurrencyModel} from "../../../../types/models/crypto-currency.model";
import {orderReadFields} from "../../../../types/enums/forms/order";
import {UserModel} from "../../../../types/models/user.model";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";
import {CountryModel} from "../../../../types/models/country.model";
import {FiatModel} from "../../../../types/models/fiat.model";
import {fromCurrencyType} from "./orders-get-one.ctr";

export async function ordersGetAllCtr(
  currentUser: UserModel,
  query: IOrdersReq = defaultPagination,
): Promise<IOrdersRes> {
  return OrderModel.findAndCountAll({
    limit: query[paginationFields.limit],
    offset: query[paginationFields.offset],
    where: query, // TODO: Check for security
    include: [
      {model: CryptoCurrencyModel, as: orderReadFields.cryptoCurrencyBuy},
      {model: CryptoCurrencyModel, as: orderReadFields.cryptoCurrencySell},
      {model: FiatModel, as: orderReadFields.fiatSell},
      {model: FiatModel, as: orderReadFields.fiatBuy},
      {model: UserModel, as: orderReadFields.accepter},
      {model: UserModel, as: orderReadFields.owner},
      PaymentMethodModel,
      CountryModel,
    ],
  })
    .then(data => {
      return Promise.map(data.rows, fromCurrencyType).then(payload => {
        return {
          payload,
          ok: true,
          count: data.count,
        } as IOrdersRes;
      });
    })
    .catch(err => {
      return {
        errors: [err],
        ok: false,
        count: 0,
      };
    });
}
