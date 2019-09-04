import {ICommonRes} from "../../types/api/responses";

export function statusCtr(): ICommonRes {
  return {ok: true, serverTime: 123};
}
