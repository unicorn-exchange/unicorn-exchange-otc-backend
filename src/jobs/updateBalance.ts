import {Job} from "bull";
import {IAppContext} from "../interfaces/IContext";

export function onUpdateBalance(job: Job, ctx: IAppContext) {
  const {sendCurrency, getBalance, getWallet} = ctx.services.wallet;
}
