import {randomBytes} from "crypto";
import {Enum} from "../../enum/enum";
import {IWallet} from "../../interfaces/IWallet";

export class MockWallet implements IWallet {
  async createKeyPairFromMnemonic(mnemonic: string): Promise<{privateKey: string, address: string}> {
    const privateKey = randomBytes(32).toString(Enum.Hex);
    const address = randomBytes(256).toString(Enum.Hex);
    return {privateKey, address};
  }
}
