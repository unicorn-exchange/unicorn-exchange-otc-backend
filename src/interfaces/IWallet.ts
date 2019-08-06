export interface IWallet {
  createKeyPairFromMnemonic(mnemonic: string): Promise<{privateKey: string, address: string}>;
}
