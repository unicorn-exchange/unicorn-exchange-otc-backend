import {userDepositFields} from "../enums/forms/user-deposit";

export interface IPagination {
  offset?: number;
  limit?: number;
}

export interface IOrdersReq extends IPagination {
}

export interface ISignInUserReq {
  email: string;
  password: string;
}

export interface ISignUpUserReq extends ISignInUserReq {
  username: string;
}

export interface IDepositReq {
  [userDepositFields.blockchainId]: number;
  [userDepositFields.amount]: number;
}
