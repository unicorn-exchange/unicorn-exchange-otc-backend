import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc, SETTINGS, SETTINGS_COMMON} from "../../../../types/api/api-v1-doc";
import {settingsCommonCtr} from "./settings-common";
import {isAuth} from "../../../middlewares/isAuth";
import {ICommonRes} from "../../../../types/api/responses";

function settingsCtr(): ICommonRes {
  return {
    ok: true,
  };
}

export function settingsRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.get(SETTINGS, async () => settingsCtr(), isAuth);
  router.get(SETTINGS_COMMON, async () => settingsCommonCtr());
}
