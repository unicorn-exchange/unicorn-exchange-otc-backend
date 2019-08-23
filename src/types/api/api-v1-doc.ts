import {
  ICommonResponse,
  IGlobalSettingsRes,
  ISignInRes,
  ISignInUserRes,
  ISignInUserWithTokenRes,
  ISignUpRes,
} from "./responses";
import {ISignInUserReq, ISignUpUserReq} from "./requests";

export const USERS_ME = "/users/me";
export const AUTH_SIGN_UP = "/auth/sign-up";
export const AUTH_SIGN_IN = "/auth/sign-in";
export const INFO = "/info";
export const GLOBAL_SETTINGS = "/global-settings";

export interface APIV1Doc {
  [INFO]: {
    GET: {
      response: ICommonResponse;
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

  [USERS_ME]: {
    GET: {
      head: ISignInUserWithTokenRes;
      response: ISignInUserRes;
    };
  };

  [GLOBAL_SETTINGS]: {
    GET: {
      head: ISignInUserWithTokenRes;
      response: IGlobalSettingsRes;
    };
  };

  // "/auth/sign-in": {
  //   // Route name (without prefix, if you have one)
  //   POST: {
  //     // Any valid HTTP method
  //     query: {
  //       // Query string params (e.g. /me?includeProfilePics=true)
  //       includeProfilePics?: boolean;
  //     };
  //     // response: User[]; // JSON response
  //   };
  // };

  // "/user/:id/send-message": {
  //   POST: {
  //     params: {
  //       // Inline route params
  //       id: string;
  //     };
  //     body: {
  //       // JSON request body
  //       message: string;
  //     };
  //     response: {
  //       // JSON response
  //       success: boolean;
  //     };
  //   };
  // };
}
