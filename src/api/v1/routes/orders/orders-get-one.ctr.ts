import {OrderModel} from "../../../../types/models/order.model";
import {ICurrencyDTO, IDBInstance, IFullOrderDTO} from "../../../../types/api/dtos";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";
import {validateObject} from "../../../../utils/utils";
import {dbInstanceValidationScheme} from "../../../../types/validators/db-instance-validator";
import {CryptoCurrencyModel} from "../../../../types/models/crypto-currency.model";
import {CountryModel} from "../../../../types/models/country.model";
import {UserModel} from "../../../../types/models/user.model";
import {orderCommonFields, orderReadFields} from "../../../../types/enums/forms/order";
import {IOrderRes} from "../../../../types/api/responses";
import {FiatModel} from "../../../../types/models/fiat.model";
import {CurrencyTypes} from "../../../../types/enums/currency-types";

export async function ordersGetOneCtr(params: IDBInstance): Promise<IOrderRes> {
  return validateObject(params, dbInstanceValidationScheme)
    .then(() =>
      OrderModel.findByPk(params.id, {
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
      }),
    )
    .then(orderModel => fromCurrencyType(orderModel))
    .then(payload => {
      return {
        ok: true,
        payload,
      } as IOrderRes;
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}

export async function fromCurrencyType(orderModel: OrderModel | null): Promise<IFullOrderDTO> {
  if (!orderModel) {
    throw new Error("No order");
  }
  const o: any = {};

  // TODO: Doesn't work even if it's null
  const fiatBuy = orderModel.fiatBuy.toJSON() as ICurrencyDTO;
  fiatBuy.type = CurrencyTypes.fiat;
  const fiatSell = orderModel.fiatSell.toJSON() as ICurrencyDTO;
  fiatSell.type = CurrencyTypes.fiat;
  const cryptoBuy = orderModel.cryptoCurrencyBuy.toJSON() as ICurrencyDTO;
  cryptoBuy.type = CurrencyTypes.cryptoCurrency;
  const cryptoSell = orderModel.cryptoCurrencySell.toJSON() as ICurrencyDTO;
  cryptoSell.type = CurrencyTypes.cryptoCurrency;

  if (orderModel.fiatBuyId) {
    o[orderCommonFields.currencyBuy] = fiatBuy;
  }
  if (orderModel.fiatSellId) {
    o[orderCommonFields.currencySell] = fiatSell;
  }
  if (orderModel.cryptoCurrencyBuyId) {
    o[orderCommonFields.currencyBuy] = cryptoBuy;
  }
  if (orderModel.cryptoCurrencySellId) {
    o[orderCommonFields.currencySell] = cryptoSell;
  }

  return Object.assign(orderModel.toJSON(), o);
}
