import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({modelName: "payment_methods"})
export class PaymentMethodModel extends Model<PaymentMethodModel> {
  @Column(DataType.STRING)
  title!: string;
}
