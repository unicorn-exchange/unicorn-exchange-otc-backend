// import {Router, Request, Response} from "express";
// import middlewares from "../../middlewares";
// const route = Router();
//
// export default (app: Router) => {
//   app.use("/users", route);
//
//   route.get("/me", middlewares.isAuth, middlewares.attachCurrentUser, (req: Request, res: Response) => {
//     return res.json({user: req.currentUser}).status(200);
//   });
// };

import {ISignInUserRes} from "../../../../types/api/responses";

export function meCtr(token: string): ISignInUserRes {
  return {email: "", id: 0, password: "", username: ""};
}
