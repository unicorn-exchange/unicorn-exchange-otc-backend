import {ICommonResponse} from "../types/api/responses";

export interface ISystemError {
  error: string;
}

export interface IErrorReporter {
  report(err: ISystemError): Promise<ICommonResponse>;
}
