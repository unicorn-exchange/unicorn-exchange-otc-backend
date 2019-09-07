import {OrdersCreateFields} from "../enums/forms/orders-create";
import * as yup from "yup";

export const ordersCreateValidationScheme = {
  [OrdersCreateFields.countryId]: yup.number().required(),
  [OrdersCreateFields.cryptoCurrencySellId]: yup.number().required(),
  [OrdersCreateFields.cryptoCurrencySellPrice]: yup.string().required(),
  [OrdersCreateFields.cryptoCurrencyBuyId]: yup.number().required(),
  [OrdersCreateFields.cryptoCurrencyBuyPrice]: yup.string().required(),
  [OrdersCreateFields.paymentMethodId]: yup.number().required(),
  [OrdersCreateFields.bankName]: yup.string().required(),
  [OrdersCreateFields.marginProfit]: yup.string().required(),
  [OrdersCreateFields.isAutoAdjustTransactionLimit]: yup.string().required(),
  [OrdersCreateFields.termsOfTrade]: yup.string().required(),
  [OrdersCreateFields.isVerifiedUsersOnly]: yup.string().required(),
  [OrdersCreateFields.isTrustedUsersOnly]: yup.string().required(),
  [OrdersCreateFields.isIdentifyUsersBeforeContinueTrade]: yup.string().required(),
};
