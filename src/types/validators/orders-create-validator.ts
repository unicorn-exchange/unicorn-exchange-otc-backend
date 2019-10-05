import {orderCommonFields} from "../enums/forms/order";
import * as yup from "yup";

export const ordersCreateValidationScheme = {
  [orderCommonFields.countryId]: yup
    .number()
    .nullable()
    .required(),
  [orderCommonFields.cryptoCurrencySellId]: yup
    .number()
    .nullable()
    .required(),
  [orderCommonFields.cryptoCurrencySellPrice]: yup.string().required(),
  [orderCommonFields.cryptoCurrencyBuyId]: yup.number().required(),
  [orderCommonFields.cryptoCurrencyBuyPrice]: yup
    .string()
    .nullable()
    .required(),
  [orderCommonFields.paymentMethodId]: yup
    .number()
    .nullable()
    .required(),
  [orderCommonFields.bankName]: yup
    .string()
    .nullable()
    .required(),
  [orderCommonFields.marginProfit]: yup.string().required(),
  [orderCommonFields.isAutoAdjustTransactionLimit]: yup.boolean().nullable(),
  [orderCommonFields.termsOfTrade]: yup.string().nullable(),
  [orderCommonFields.isVerifiedUsersOnly]: yup.boolean().nullable(),
  [orderCommonFields.isTrustedUsersOnly]: yup.boolean().nullable(),
  [orderCommonFields.isIdentifyUsersBeforeContinueTrade]: yup.boolean().nullable(),
};
