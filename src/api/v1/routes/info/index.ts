import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc} from "../../../../types/api-v1-doc";
import {infoCtr} from "./info";
import {isAuth} from "../../../middlewares/isAuth";

export const INFO = "/info";

export function infoRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.get(INFO, async () => infoCtr(), isAuth);
}
