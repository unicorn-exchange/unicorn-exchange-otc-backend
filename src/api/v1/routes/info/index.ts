import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc, INFO} from "../../../../types/api/api-v1-doc";
import {infoCtr} from "./info";
import {isAuth} from "../../../middlewares/isAuth";

export function infoRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.get(INFO, async () => infoCtr(), isAuth);
}
