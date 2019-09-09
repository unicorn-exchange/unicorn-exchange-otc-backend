import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc, ORDERS, ORDERS_CREATE} from "../../../../types/api/api-v1-doc";
import {ordersCreateCtr} from "./create";
import {ICommonRes} from "../../../../types/api/responses";
import {IOrdersReq} from "../../../../types/api/requests";

function ordersCtr(query: IOrdersReq): ICommonRes {
  return {
    ok: true,
  };
}

export function ordersRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.get(ORDERS, async req => ordersCtr(req.query));
  router.post(ORDERS_CREATE, async req => ordersCreateCtr(req.body));
}
