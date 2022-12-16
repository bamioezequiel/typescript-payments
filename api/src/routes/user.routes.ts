import { Router } from "express";
import { changeRole, getUserByToken } from "../controllers/user.controllers";
import { checkAuth, checkRoleAuth } from "../middlewares/auth.middlewares";
import { getUserById } from "../services/user.services";

const router = Router();

/* router.get('/', checkAuth, checkRoleAuth(['User']), getUser); */
router.get("/:id", getUserById);
router.get("/", getUserByToken);
router.post("/changeRole", checkAuth, checkRoleAuth(["Admin"]), changeRole);

export default router;
