import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {OrderModel} from "./order.model";

@Table({modelName: "blockchains"})
export class BlockchainModel extends Model<BlockchainModel> {
  @Column(DataType.STRING)
  title!: string;

  @HasMany(() => OrderModel)
  orders!: OrderModel[];
}
