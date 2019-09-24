import {
  ICommonRes,
  IOrdersCreateRes,
  IOrdersRes,
  ISettingsCommonRes,
  ISignInRes,
  ISignInUserRes,
  ISignInUserWithTokenRes,
  ISignUpRes,
} from "./responses";
import {IOrdersReq, ISignInUserReq, ISignUpUserReq} from "./requests";
import {IDBInstance, IOrderDTO} from "./dtos";

export const USERS_ME = "/users/me";

// Auth
export const AUTH_SIGN_UP = "/auth/sign-up";
export const AUTH_SIGN_IN = "/auth/sign-in";

// Settings
export const SETTINGS = "/settings";
export const SETTINGS_COMMON = "/settings/common";

// Orders
export const ORDERS = "/orders";
export const ORDERS_CREATE = "/orders/create";
export const ORDERS_REQUEST = "/orders/request";
export const ORDERS_CONFIRM = "/orders/confirm";
export const ORDERS_DECLINE = "/orders/decline";

export interface APIV1Doc {
  [USERS_ME]: {
    GET: {
      head: ISignInUserWithTokenRes;
      response: ISignInUserRes;
    };
  };

  [AUTH_SIGN_UP]: {
    POST: {
      body: ISignUpUserReq;
      response: ISignUpRes;
    };
  };

  [AUTH_SIGN_IN]: {
    POST: {
      body: ISignInUserReq;
      response: ISignInRes;
    };
  };

  [SETTINGS]: {
    GET: {
      response: ICommonRes;
    };
  };

  [SETTINGS_COMMON]: {
    GET: {
      head: ISignInUserWithTokenRes;
      response: ISettingsCommonRes;
    };
  };

  [ORDERS]: {
    GET: {
      query: IOrdersReq;
      response: IOrdersRes;
    };
  };

  [ORDERS_CREATE]: {
    POST: {
      body: IOrderDTO;
      response: IOrdersCreateRes;
    };
  };

  [ORDERS_REQUEST]: {
    GET: {
      query: IDBInstance;
      response: IOrderDTO;
    };
  };

  [ORDERS_CONFIRM]: {
    POST: {
      body: IDBInstance;
      response: ICommonRes;
    };
  };

  [ORDERS_DECLINE]: {
    POST: {
      body: IDBInstance;
      response: ICommonRes;
    };
  };
}
