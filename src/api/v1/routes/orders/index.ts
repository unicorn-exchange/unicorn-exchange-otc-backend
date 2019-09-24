import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {
  APIV1Doc,
  ORDERS,
  ORDERS_CONFIRM,
  ORDERS_CREATE,
  ORDERS_DECLINE,
  ORDERS_REQUEST,
} from "../../../../types/api/api-v1-doc";
import {ordersCreateCtr} from "./create";
import {IOrdersRes} from "../../../../types/api/responses";
import {IOrdersReq} from "../../../../types/api/requests";
import {ordersConfirmCtr} from "./confirm";
import {ordersRequestCtr} from "./request";
import {ordersDeclineCtr} from "./decline";
import {OrderModel} from "../../../../types/models/order.model";

async function ordersCtr(query: IOrdersReq): Promise<IOrdersRes> {
  return OrderModel.findAndCountAll({
    limit: query.limit,
    offset: query.offset,
  }).then(data => {
    return {
      payload: data.rows,
      ok: true,
      count: data.count,
    } as IOrdersRes;
  });
}

export function ordersRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.get(ORDERS, async req => ordersCtr(req.query));
  router.post(ORDERS_CREATE, async req => ordersCreateCtr(req.body));
  router.get(ORDERS_REQUEST, async req => ordersRequestCtr(req.query));
  router.post(ORDERS_CONFIRM, async req => ordersConfirmCtr(req.body));
  router.post(ORDERS_DECLINE, async req => ordersDeclineCtr(req.body));
}
