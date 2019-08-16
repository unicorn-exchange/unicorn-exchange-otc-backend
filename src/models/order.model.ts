import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "orders"})
export class OrderModel extends Model<OrderModel> {
  @Column(DataType.UUID) // Foreign key to user
  owner!: number;

  @Column(DataType.UUID) // Foreign key to currency table
  buyCurrency!: string;

  @Column(DataType.UUID) // Foreign key to currency table
  sellCurrency!: string;

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
