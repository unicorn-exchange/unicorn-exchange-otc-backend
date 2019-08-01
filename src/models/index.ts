import {Sequelize} from "sequelize";
import {readdirSync} from "fs";

const modelPath = "src/models";

export function initModels(db: Sequelize): Promise<Sequelize> {
  readdirSync(modelPath)
    .filter(file => file.includes(".model"))
    .forEach(file => {
      console.log("Incl", file);
      db.import(file);
    });

  return db.sync();
}
