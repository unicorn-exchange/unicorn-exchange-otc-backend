import {Sequelize, Model, DataTypes} from "sequelize";

export class UserModel extends Model {
}

export default function(connection: Sequelize) {
  UserModel.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize: connection,
    modelName: "user",
  });
}


// UserModel.init({
//   title: DataTypes.STRING,
//   description: DataTypes.TEXT,
// }, {
//   sequelize: connection,
//   modelName: "user",
// });
