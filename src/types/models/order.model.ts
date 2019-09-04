import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {CurrencyModel} from "./currency.model";
import {UserModel} from "./user.model";
import {CountryModel} from "./country.model";
import {PaymentMethodModel} from "./payment-method.model";
import {OrdersCreateFields} from "../enums/forms/orders-create";

@Table({modelName: "orders"})
export class OrderModel extends Model<OrderModel> {
  @ForeignKey(() => UserModel)
  @Column(DataType.INTEGER)
  ownerId!: number;

  @ForeignKey(() => CurrencyModel)
  @Column({
    type: DataType.INTEGER,
    field: OrdersCreateFields.cryptoCurrencyBuyId,
  })
  cryptoCurrencyBuyId!: number;

  @ForeignKey(() => CurrencyModel)
  @Column({
    type: DataType.INTEGER,
    field: OrdersCreateFields.cryptoCurrencySellId,
  })
  cryptoCurrencySellId!: number;

  @ForeignKey(() => CountryModel)
  @Column({
    type: DataType.INTEGER,
    field: OrdersCreateFields.countryId,
  })
  countryId!: number;

  @ForeignKey(() => PaymentMethodModel)
  @Column(DataType.INTEGER)
  paymentMethodId!: number;

  @Column(DataType.BIGINT)
  buyAmount!: bigint;

  @Column(DataType.BIGINT)
  sellAmount!: bigint;

  @Column(DataType.FLOAT)
  exchangeRate!: number;

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
