import { Router } from "express";
import { changeRole, getUserById, getUserByToken, getUserOrders } from "../controllers/user.controllers";
import { checkAuth, checkRoleAuth } from "../middlewares/auth.middlewares";

const router = Router();

/* router.get('/', checkAuth, checkRoleAuth(['User']), getUser); */
router.get("/orders/:id", getUserOrders);
router.get("/:id", getUserById);
router.get("/", getUserByToken);
router.post("/changeRole", checkAuth, checkRoleAuth(["Admin"]), changeRole);

export default router;
