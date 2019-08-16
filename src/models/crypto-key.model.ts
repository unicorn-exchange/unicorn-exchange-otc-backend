import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "crypto_keys"})
export class CryptoKeyModel extends Model<CryptoKeyModel> {
  @Column(DataType.STRING)
  publicKey!: string;

  @Column(DataType.STRING)
  privateKey!: string;

  @Column(DataType.STRING)
  ERC20!: string;

  @Column(DataType.BOOLEAN)
  isDefault!: boolean;

  @Column(DataType.STRING)
  isCustomKey!: string;

  @Column(DataType.NUMBER) // Foreign key to crypto account
  cryptoAccountId!: number;
}
