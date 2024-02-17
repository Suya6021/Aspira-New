import { Router } from "express";
import { Login, SignUp } from "../controllers/UserController";

let router = Router();

router.route("/login").post(Login);
router.route("/signup").post(SignUp);

export default router;