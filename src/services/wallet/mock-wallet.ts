import {randomBytes} from "crypto";
import {Enums} from "../../types/enums/enums";
import {IWallet} from "../../interfaces/IWallet";

export class MockWallet implements IWallet {
  async createKeyPairFromMnemonic(mnemonic: string): Promise<{privateKey: string; address: string}> {
    const privateKey = randomBytes(32).toString(Enums.Hex);
    const address = randomBytes(256).toString(Enums.Hex);
    return {privateKey, address};
  }
}
