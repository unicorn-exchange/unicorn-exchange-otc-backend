import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "countries"})
export class CountryModel extends Model<CountryModel> {
  @Column(DataType.STRING)
  title!: string;
}
