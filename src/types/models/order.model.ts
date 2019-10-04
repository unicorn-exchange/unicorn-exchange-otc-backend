import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "./user.model";
import {CountryModel} from "./country.model";
import {PaymentMethodModel} from "./payment-method.model";
import {ordersCreateFields} from "../enums/forms/orders-create";
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
    field: ordersCreateFields.cryptoCurrencyBuyId,
  })
  cryptoCurrencyBuyId!: number;

  @BelongsTo(() => BlockchainModel)
  cryptoCurrencyBuy!: BlockchainModel;

  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.cryptoCurrencyBuyPrice,
  })
  cryptoCurrencyBuyPrice!: number;

  @ForeignKey(() => BlockchainModel)
  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.cryptoCurrencySellId,
  })
  cryptoCurrencySellId!: number;

  @BelongsTo(() => BlockchainModel)
  cryptoCurrencySell!: BlockchainModel;

  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.cryptoCurrencySellPrice,
  })
  cryptoCurrencySellPrice!: number;

  @ForeignKey(() => CountryModel)
  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.countryId,
  })
  countryId!: number;

  @BelongsTo(() => CountryModel)
  country!: CountryModel;

  @ForeignKey(() => PaymentMethodModel)
  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.paymentMethodId,
  })
  paymentMethodId!: number;

  @BelongsTo(() => PaymentMethodModel)
  paymentMethod!: PaymentMethodModel;

  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.bankName,
  })
  bankName!: string;

  @Column({
    type: DataType.INTEGER,
    field: ordersCreateFields.marginProfit,
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
    field: ordersCreateFields.isAutoAdjustTransactionLimit,
  })
  isAutoAdjustTransactionLimit!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: ordersCreateFields.isVerifiedUsersOnly,
  })
  isVerifiedUsersOnly!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: ordersCreateFields.isTrustedUsersOnly,
  })
  isTrustedUsersOnly!: boolean;

  @Column({
    type: DataType.STRING,
    field: ordersCreateFields.termsOfTrade,
  })
  termsOfTrade!: string;

  @Column({
    type: DataType.BOOLEAN,
    field: ordersCreateFields.isIdentifyUsersBeforeContinueTrade,
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
