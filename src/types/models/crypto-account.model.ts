import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {UserModel} from "./user.model";
import {BlockchainModel} from "./blockchain.model";

@Table({modelName: "crypto_accounts"})
export class CryptoAccountModel extends Model<CryptoAccountModel> {
  @ForeignKey(() => BlockchainModel)
  @Column(DataType.INTEGER)
  blockchainId!: number;

  @Column(DataType.BOOLEAN)
  isActive!: boolean;

  @ForeignKey(() => UserModel)
  @Column(DataType.INTEGER)
  userId!: number;
}
