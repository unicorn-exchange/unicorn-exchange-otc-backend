import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "currencies"})
export class CurrencyModel extends Model<CurrencyModel> {
  @Column(DataType.STRING)
  title!: string;
}
