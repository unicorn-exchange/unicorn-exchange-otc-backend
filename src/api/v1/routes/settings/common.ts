import {ISettingsCommonRes} from "../../../../types/api/responses";

export function settingsCommonCtr(): Promise<ISettingsCommonRes> {
  return new Promise(resolve => {
    resolve({
      ok: true,
      countries: [],
      cryptoCurrencies: [],
      paymentMethods: [],
    });
  });
  // return CountryModel.findAll().then(countries => {
  //   return {
  //     a: true,
  //     countries: [],
  //     cryptoCurrencies: [],
  //     paymentMethods: [],
  //   };
  // });
}
