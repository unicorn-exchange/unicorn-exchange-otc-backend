import {IErrorReporter, ISystemError} from "../interfaces/IErrorReporter";
import {IBaseContext} from "../interfaces/IContext";
import {ICommonResponse} from "../types/api/responses";

export class ErrorReporter implements IErrorReporter {
  private ctx: IBaseContext;

  constructor(ctx: IBaseContext) {
    this.ctx = ctx;
  }

  async report(err: ISystemError): Promise<ICommonResponse> {
    return {ok: true};
  }
}
