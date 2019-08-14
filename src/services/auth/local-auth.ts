import jwt from "jsonwebtoken";
import argon2 from "argon2";
import {randomBytes} from "crypto";
import {ISignUpUserInput, IUserRecord} from "../../interfaces/IUser";
import {IAuth} from "../../interfaces/IAuth";
import {IBaseContext} from "../../interfaces/IContext";
import {Sequelize} from "sequelize-typescript";
import {UserModel} from "../../models/user.model";
import {Enum} from "../../enum/enum";
import {generateSecret} from "speakeasy";

export class LocalAuth implements IAuth {
  private ctx: IBaseContext;
  private db: Sequelize;

  constructor(ctx: IBaseContext, db: Sequelize) {
    this.ctx = ctx;
    this.db = db;
  }

  signUp(user: ISignUpUserInput): Promise<{user: any; token: string}> {
    const salt = randomBytes(32);
    return argon2
      .hash(user.password, {salt})
      .then(hashedPassword => {
        return UserModel.create({
          ...user,
          salt: salt.toString(Enum.Hex),
          password: hashedPassword,
        });
      })
      .then(userRec => {
        const token = this.generateToken(userRec);
        return {user, token};
      })
      .catch(err => {
        this.ctx.logger.error(err);
        throw new Error("Can't sign up user");
      });
  }

  signIn(email: string, password: string): Promise<{user: IUserRecord; token: string}> {
    return (
      UserModel.findOne({where: {email}})
      // @ts-ignore
        .then((userRecord: UserModel) => {
          if (!userRecord) {
            throw new Error("User not registered");
          }
          return argon2.verify(userRecord.password, password).then(() => {
            const token = this.generateToken(userRecord);
            return {user: userRecord, token};
          });
        })
        .catch((err: Error) => {
          this.ctx.logger.error(err);
          throw new Error("Invalid Password");
        })
    );
  }

  fa() {

  }

  private generateToken(user: UserModel) {
    const today = new Date(); // TODO: Change to moment.js
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    this.ctx.logger.silly(`Sign JWT for userId: ${user.id}`);
    return jwt.sign(
      {
        _id: user.id, // We are gonna use this in the middleware 'isAuth'
        role: "manager",
        name: "Alex",
        exp: exp.getTime() / 1000,
      },
      this.ctx.env.JWT_SECRET,
    );
  }
}
