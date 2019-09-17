import {ISettingsCommonRes} from "../../../../types/api/responses";
import {CountryModel} from "../../../../types/models/country.model";
import Bluebird from "bluebird";
import {BlockchainModel} from "../../../../types/models/blockchain.model";
import {PaymentMethodModel} from "../../../../types/models/payment-method.model";

export function settingsCommonCtr(): Promise<ISettingsCommonRes | any> {
  return Bluebird.props({
    countries: CountryModel.findAll(),
    cryptoCurrencies: BlockchainModel.findAll(),
    paymentMethods: PaymentMethodModel.findAll(),
  }).then(({paymentMethods, countries, cryptoCurrencies}) => {
    // TODO: check if we need for toJSON()
    if (!paymentMethods || !countries || !cryptoCurrencies) {
      throw new Error("Settings error");
    }
    // TODO: Check types
    return {
      countries,
      cryptoCurrencies,
      paymentMethods,
    };
  });
}
