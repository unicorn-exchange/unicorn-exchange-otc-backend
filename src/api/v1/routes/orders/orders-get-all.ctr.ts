import {IOrdersReq} from "../../../../types/api/requests";
import {IOrdersRes} from "../../../../types/api/responses";
import {OrderModel} from "../../../../types/models/order.model";

export async function ordersGetAllCtr(query: IOrdersReq): Promise<IOrdersRes> {
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
