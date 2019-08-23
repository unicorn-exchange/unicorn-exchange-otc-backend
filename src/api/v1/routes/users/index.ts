import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc, USERS_ME} from "../../../../types/api/api-v1-doc";
import {meCtr} from "./me";
import {isAuth} from "../../../middlewares/isAuth";

export function usersRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);
  router.get(USERS_ME, async req => meCtr(req.token), isAuth);
}
