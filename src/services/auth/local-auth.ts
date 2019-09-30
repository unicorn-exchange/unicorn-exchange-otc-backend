import jwt from "jsonwebtoken";
import argon2 from "argon2";
import {randomBytes} from "crypto";
import {IAuth, IDecodedTokenObj} from "../../interfaces/IAuth";
import {IBaseContext} from "../../interfaces/IContext";
import {Sequelize} from "sequelize-typescript";
import {UserModel} from "../../types/models/user.model";
import {Enums} from "../../types/enums/enums";
import {ISignUpUserReq} from "../../types/api/requests";

export class LocalAuth implements IAuth {
  private ctx: IBaseContext;
  private db: Sequelize;

  constructor(ctx: IBaseContext, db: Sequelize) {
    this.ctx = ctx;
    this.db = db;
  }

  signUp(user: ISignUpUserReq) {
    const salt = randomBytes(32);
    return argon2
      .hash(user.password, {salt})
      .then(hashedPassword => {
        return UserModel.create({
          ...user,
          salt: salt.toString(Enums.Hex),
          password: hashedPassword,
        });
      })
      .then(userRec => {
        const token = this.generateToken(userRec);
        return {user: userRec, token};
      })
      .catch(err => {
        this.ctx.logger.error(err);
        throw new Error("Can't sign up user");
      });
  }

  signIn(email: string, password: string) {
    return UserModel.findOne({where: {email}})
      .then(userRecord => {
        if (!userRecord) {
          throw new Error("User not found");
        }
        return argon2
          .verify(userRecord.password, password)
          .then(() => {
            const token = this.generateToken(userRecord);
            return {user: userRecord, token};
          })
          .catch(() => {
            throw new Error("Invalid email/password");
          });
      })
      .catch((err: Error) => {
        this.ctx.logger.error(err);
        throw err;
      });
  }

  private generateToken(user: UserModel): string {
    const today = new Date(); // TODO: Change to moment.js
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    this.ctx.logger.silly(`Sign JWT for userId: ${user.id}`);
    return jwt.sign(
      {
        userId: user.id,
        exp: exp.getTime() / 1000,
      } as IDecodedTokenObj,
      this.ctx.env.JWT_SECRET,
    );
  }
}
