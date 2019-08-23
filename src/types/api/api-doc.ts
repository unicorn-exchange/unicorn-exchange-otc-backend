import {ICommonResponse} from "./responses";

export const STATUS = "/status";

export interface APIDoc {
  [STATUS]: {
    GET: {
      response: ICommonResponse;
    };
    HEAD: {
      response: ICommonResponse;
    };
  };
}
