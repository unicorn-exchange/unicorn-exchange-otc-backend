import {IAuth} from "../../../../interfaces/IAuth";
import {ISignInUserRes, ISignUpRes} from "../../../../types/api/responses";
import {ISignUpUserReq} from "../../../../types/api/requests";
import {signUpValidationScheme} from "../../../../types/validators/sign-up-validator";
import {validateObject} from "../../../../utils/utils";
import {CryptoAccountModel} from "../../../../types/models/crypto-account.model";
import {BlockchainsIds} from "../../../../../data/blockchains";

export async function signUpCtr(auth: IAuth, user: ISignUpUserReq): Promise<ISignUpRes> {
  return validateObject(user, signUpValidationScheme)
    .then(() => auth.signUp(user))
    .then(({user, token}) => {
      if (!user) {
        throw new Error("No User");
      }
      return createDefaultWallets(user).then(() => {
        return {
          ok: true,
          errors: [],
          user,
          token,
        } as ISignUpRes;
      });
    })
    .catch(err => {
      return {
        ok: false,
        errors: [err],
      };
    });
}

function createDefaultWallets(user: ISignInUserRes): Promise<any> {
  return Promise.all([
    CryptoAccountModel.create({
      userId: user.id,
      blockchainId: BlockchainsIds.Bitcoin,
    }),
    CryptoAccountModel.create({
      userId: user.id,
      blockchainId: BlockchainsIds.Ethereum,
    }),
  ]);
}
