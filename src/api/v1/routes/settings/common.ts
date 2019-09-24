import {ISettingsCommonRes} from "../../../../types/api/responses";
import {CountryModel} from "../../../../types/models/country.model";
import {BlockchainModel} from "../../../../types/models/blockchain.model";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";

export function settingsCommonCtr(): Promise<ISettingsCommonRes> {
  return Promise.props({
    countries: CountryModel.findAll(),
    cryptoCurrencies: BlockchainModel.findAll(),
    paymentMethods: PaymentMethodModel.findAll(),
  }).then(props => {
    const {paymentMethods, countries, cryptoCurrencies} = props as ISettingsCommonRes;
    // TODO: check if we need for toJSON()
    if (!paymentMethods || !countries || !cryptoCurrencies) {
      throw new Error("Settings error");
    }
    // TODO: Check types
    return {
      ok: true,
      countries,
      cryptoCurrencies,
      paymentMethods,
    };
  });
}
