import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "blockchains"})
export class BlockchainModel extends Model<BlockchainModel> {
  @Column(DataType.STRING)
  title!: string;
}
