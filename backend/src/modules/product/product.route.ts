import { Router } from "express";
import { productController } from "./product.controller";

const router = Router();

router.get("/popular", (req, res, next) =>
  productController.getPopularProducts(req, res, next)
);
router.get("/best-sells", (req, res, next) =>
  productController.getBestSells(req, res, next)
);

export const productRoutes: Router = router;
