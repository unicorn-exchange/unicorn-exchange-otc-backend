import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc, ORDERS_CREATE} from "../../../../types/api/api-v1-doc";
import {ordersCreateCtr} from "./create";

export function ordersRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.post(ORDERS_CREATE, async req => ordersCreateCtr(req.body));
}
