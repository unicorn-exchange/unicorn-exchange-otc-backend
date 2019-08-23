export interface ISignInUserReq {
  email: string;
  password: string;
}

export interface ISignUpUserReq extends ISignInUserReq {
  username: string;
}
