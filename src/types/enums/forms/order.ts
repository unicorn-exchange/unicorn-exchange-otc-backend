export enum orderCommonFields {
  cryptoCurrencySellPrice = "cryptoCurrencySellPrice",
  cryptoCurrencyBuyPrice = "cryptoCurrencyBuyPrice",
  bankName = "bankName",
  marginProfit = "marginProfit",
  isAutoAdjustTransactionLimit = "isAutoAdjustTransactionLimit",
  termsOfTrade = "termsOfTrade",
  isVerifiedUsersOnly = "isVerifiedUsersOnly",
  isTrustedUsersOnly = "isTrustedUsersOnly",
  isIdentifyUsersBeforeContinueTrade = "isIdentifyUsersBeforeContinueTrade",
}

export enum orderWriteFields {
  countryId = "countryId",
  paymentMethodId = "paymentMethodId",
  cryptoCurrencySellId = "cryptoCurrencySellId",
  cryptoCurrencyBuyId = "cryptoCurrencyBuyId",
}

export enum orderReadFields {
  country = "country",
  paymentMethod = "paymentMethod",
  cryptoCurrencySell = "cryptoCurrencySell",
  cryptoCurrencyBuy = "cryptoCurrencyBuy",
}
