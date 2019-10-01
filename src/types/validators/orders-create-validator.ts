import {ordersCreateFields} from "../enums/forms/orders-create";
import * as yup from "yup";

export const ordersCreateValidationScheme = {
  [ordersCreateFields.countryId]: yup.number().nullable().required(),
  [ordersCreateFields.cryptoCurrencySellId]: yup.number().nullable().required(),
  [ordersCreateFields.cryptoCurrencySellPrice]: yup.string().required(),
  [ordersCreateFields.cryptoCurrencyBuyId]: yup.number().required(),
  [ordersCreateFields.cryptoCurrencyBuyPrice]: yup.string().nullable().required(),
  [ordersCreateFields.paymentMethodId]: yup.number().nullable().required(),
  [ordersCreateFields.bankName]: yup.string().nullable().required(),
  [ordersCreateFields.marginProfit]: yup.string().required(),
  [ordersCreateFields.isAutoAdjustTransactionLimit]: yup.boolean().nullable(),
  [ordersCreateFields.termsOfTrade]: yup.string().nullable(),
  [ordersCreateFields.isVerifiedUsersOnly]: yup.boolean().nullable(),
  [ordersCreateFields.isTrustedUsersOnly]: yup.boolean().nullable(),
  [ordersCreateFields.isIdentifyUsersBeforeContinueTrade]: yup.boolean().nullable(),
};
