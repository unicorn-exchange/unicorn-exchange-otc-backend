import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "crypto_accounts"})
export class CryptoAccountModel extends Model<CryptoAccountModel> {
  @Column(DataType.UUID) // Foreign key to blockchain
  blockchainId!: number;

  @Column(DataType.BOOLEAN)
  isActive!: boolean;

  @Column(DataType.UUID) // Foreign key to user
  userId!: number;
}
