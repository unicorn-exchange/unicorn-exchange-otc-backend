import {Table, Column, Model, DataType} from "sequelize-typescript";

@Table
export class UserModel extends Model<UserModel> {
  @Column(DataType.STRING)
  email: string | undefined;

  @Column(DataType.STRING)
  password: string | undefined;

  @Column(DataType.STRING)
  salt: string | undefined;

  @Column(DataType.STRING)
  username: string | undefined;
}
