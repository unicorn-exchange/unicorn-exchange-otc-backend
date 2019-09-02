import {CountryModel} from "../../../../types/models/country.model";
import Bluebird = require("bluebird");

export function settingsCommonCtr(): Bluebird<{a: boolean}> {
  return CountryModel.findAll().then(countries => {
    return {
      a: true,
      // countries: [],
      // cryptoCurrencies: [],
      // paymentMethods: [],
    };
  });
}
