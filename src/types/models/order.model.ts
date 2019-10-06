import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "./user.model";
import {CountryModel} from "./country.model";
import {PaymentMethodModel} from "./payment-method.model";
import {orderCommonFields, orderWriteFields} from "../enums/forms/order";
import {BlockchainModel} from "./blockchain.model";

@Table({modelName: "orders"})
export class OrderModel extends Model<OrderModel> {
  @ForeignKey(() => UserModel)
  @Column(DataType.INTEGER)
  ownerId!: number;

  @BelongsTo(() => UserModel)
  owner!: UserModel;

  @ForeignKey(() => BlockchainModel)
  @Column({
    type: DataType.INTEGER,
    field: orderWriteFields.cryptoCurrencyBuyId,
  })
  cryptoCurrencyBuyId!: number;

  @BelongsTo(() => BlockchainModel)
  cryptoCurrencyBuy!: BlockchainModel;

  @Column({
    type: DataType.INTEGER,
    field: orderCommonFields.cryptoCurrencyBuyPrice,
  })
  cryptoCurrencyBuyPrice!: number;

  @ForeignKey(() => BlockchainModel)
  @Column({
    type: DataType.INTEGER,
    field: orderWriteFields.cryptoCurrencySellId,
  })
  cryptoCurrencySellId!: number;

  @BelongsTo(() => BlockchainModel)
  cryptoCurrencySell!: BlockchainModel;

  @Column({
    type: DataType.INTEGER,
    field: orderCommonFields.cryptoCurrencySellPrice,
  })
  cryptoCurrencySellPrice!: number;

  @ForeignKey(() => CountryModel)
  @Column({
    type: DataType.INTEGER,
    field: orderWriteFields.countryId,
  })
  countryId!: number;

  @BelongsTo(() => CountryModel)
  country!: CountryModel;

  @ForeignKey(() => PaymentMethodModel)
  @Column({
    type: DataType.INTEGER,
    field: orderWriteFields.paymentMethodId,
  })
  paymentMethodId!: number;

  @BelongsTo(() => PaymentMethodModel)
  paymentMethod!: PaymentMethodModel;

  @Column({
    type: DataType.INTEGER,
    field: orderCommonFields.bankName,
  })
  bankName!: string;

  @Column({
    type: DataType.INTEGER,
    field: orderCommonFields.marginProfit,
  })
  marginProfit!: number;

  @Column(DataType.BIGINT)
  buyAmount!: bigint;

  @Column(DataType.BIGINT)
  sellAmount!: bigint;

  @Column(DataType.FLOAT)
  exchangeRate!: number;

  @Column({
    type: DataType.BOOLEAN,
    field: orderCommonFields.isAutoAdjustTransactionLimit,
  })
  isAutoAdjustTransactionLimit!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: orderCommonFields.isVerifiedUsersOnly,
  })
  isVerifiedUsersOnly!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: orderCommonFields.isTrustedUsersOnly,
  })
  isTrustedUsersOnly!: boolean;

  @Column({
    type: DataType.STRING,
    field: orderCommonFields.termsOfTrade,
  })
  termsOfTrade!: string;

  @Column({
    type: DataType.BOOLEAN,
    field: orderCommonFields.isIdentifyUsersBeforeContinueTrade,
  })
  isIdentifyUsersBeforeContinueTrade!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isRequested!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isProcessing!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isPartial!: boolean;
}
