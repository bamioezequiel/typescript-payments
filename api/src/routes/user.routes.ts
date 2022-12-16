import { Router } from "express";
import { changeRole, getUser } from "../controllers/user.controllers";
import { checkAuth, checkRoleAuth } from "../middlewares/auth.middlewares";

const router = Router();

/* router.get('/', checkAuth, checkRoleAuth(['User']), getUser); */
router.get("/:id", getUser);
router.post("/changeRole", checkAuth, checkRoleAuth(["Admin"]), changeRole);

export default router;
