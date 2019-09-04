import Joi from "@hapi/joi";
import {OrdersCreateFields} from "../enums/forms/orders-create";

export const ordersCreateValidationScheme = Joi.object().keys({
  [OrdersCreateFields.countryId]: Joi.number().required(),
  [OrdersCreateFields.cryptoCurrencySellId]: Joi.number().required(),
  [OrdersCreateFields.cryptoCurrencySellPrice]: Joi.string().required(),
  [OrdersCreateFields.cryptoCurrencyBuyId]: Joi.number().required(),
  [OrdersCreateFields.cryptoCurrencyBuyPrice]: Joi.string().required(),
  [OrdersCreateFields.paymentMethodId]: Joi.number().required(),
  [OrdersCreateFields.bankName]: Joi.string().required(),
  [OrdersCreateFields.marginProfit]: Joi.string().required(),
  [OrdersCreateFields.isAutoAdjustTransactionLimit]: Joi.string().required(),
  [OrdersCreateFields.termsOfTrade]: Joi.string().required(),
  [OrdersCreateFields.isVerifiedUsersOnly]: Joi.string().required(),
  [OrdersCreateFields.isTrustedUsersOnly]: Joi.string().required(),
  [OrdersCreateFields.isIdentifyUsersBeforeContinueTrade]: Joi.string().required(),
});
