import { Request, Response, NextFunction } from "express";
import { productService } from "./product.service";
import { sendSuccess } from "../../common/utils/response.util";

export class ProductController {
  async getPopularProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const products = productService.getPopularProducts();
      return sendSuccess(
        res,
        products,
        "Popular products retrieved successfully"
      );
    } catch (error) {
      next(error);
    }
  }

  async getBestSells(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const products = productService.getBestSells();
      return sendSuccess(res, products, "Best sells retrieved successfully");
    } catch (error) {
      next(error);
    }
  }
}

export const productController = new ProductController();
