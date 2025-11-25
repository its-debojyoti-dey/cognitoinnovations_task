import { Request, Response, NextFunction } from "express";
import { orderService } from "./order.service";
import { sendSuccess } from "../../common/utils/response.util";
import { PlaceOrderRequest } from "./order.types";

export class OrderController {
  async placeOrder(
    req: Request<{}, {}, PlaceOrderRequest>,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const result = await orderService.placeOrder(req.body);
      return sendSuccess(res, result, "Order placed successfully");
    } catch (error) {
      next(error);
    }
  }
}

export const orderController = new OrderController();
