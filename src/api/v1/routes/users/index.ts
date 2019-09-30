import {Router} from "express";
import RestypedRouter from "restyped-express-async-middleware";
import {APIV1Doc, USERS_DEPOSIT, USERS_ME} from "../../../../types/api/api-v1-doc";
import {meCtr} from "./me";
import {isAuth} from "../../../middlewares/isAuth";
import {depositCtr} from "./deposit";
import {attachCurrentUser} from "../../../middlewares/attachCurrentUser";

export function usersRouter(parentRouter: Router) {
  const router = RestypedRouter<APIV1Doc>(parentRouter);

  router.get(USERS_ME, async req => meCtr(req.token), attachCurrentUser, isAuth);
  router.post(USERS_DEPOSIT, async req => depositCtr(req.body), isAuth);
}
