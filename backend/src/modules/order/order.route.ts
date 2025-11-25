import { Router } from "express";
import { orderController } from "./order.controller";

const router = Router();

router.post("/", (req, res, next) =>
  orderController.placeOrder(req, res, next)
);

export const orderRoutes: Router = router;
