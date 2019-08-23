import {ICommonResponse} from "../../types/api/responses";

export function statusCtr(): ICommonResponse {
  return {ok: true, serverTime: 123};
}
