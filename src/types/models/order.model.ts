import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {CurrencyModel} from "./currency.model";
import {UserModel} from "./user.model";
import {CountryModel} from "./country.model";
import {PaymentMethodModel} from "./payment-method.model";

@Table({modelName: "orders"})
export class OrderModel extends Model<OrderModel> {
  @ForeignKey(() => UserModel)
  @Column(DataType.INTEGER)
  ownerId!: number;

  @ForeignKey(() => CurrencyModel)
  @Column(DataType.INTEGER)
  buyCurrencyId!: number;

  @ForeignKey(() => CurrencyModel)
  @Column(DataType.INTEGER)
  sellCurrencyId!: number;

  @ForeignKey(() => CountryModel)
  @Column(DataType.INTEGER)
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

  @Column(DataType.BOOLEAN)
  isRequested!: boolean;

  @Column(DataType.BOOLEAN)
  isProcessing!: boolean;

  @Column(DataType.BOOLEAN)
  isPartial!: boolean;
}
