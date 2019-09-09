import {ordersCreateFields} from "../enums/forms/orders-create";
import * as yup from "yup";

export const ordersCreateValidationScheme = {
  [ordersCreateFields.countryId]: yup.number().required(),
  [ordersCreateFields.cryptoCurrencySellId]: yup.number().required(),
  [ordersCreateFields.cryptoCurrencySellPrice]: yup.string().required(),
  [ordersCreateFields.cryptoCurrencyBuyId]: yup.number().required(),
  [ordersCreateFields.cryptoCurrencyBuyPrice]: yup.string().required(),
  [ordersCreateFields.paymentMethodId]: yup.number().required(),
  [ordersCreateFields.bankName]: yup.string().required(),
  [ordersCreateFields.marginProfit]: yup.string().required(),
  [ordersCreateFields.isAutoAdjustTransactionLimit]: yup.string().required(),
  [ordersCreateFields.termsOfTrade]: yup.string().required(),
  [ordersCreateFields.isVerifiedUsersOnly]: yup.string().required(),
  [ordersCreateFields.isTrustedUsersOnly]: yup.string().required(),
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: yup.string().required(),
};
