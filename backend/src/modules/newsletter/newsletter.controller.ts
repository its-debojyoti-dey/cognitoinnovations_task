import { Request, Response, NextFunction } from "express";
import { newsletterService } from "./newsletter.service";
import { sendSuccess } from "../../common/utils/response.util";
import { SubscribeNewsletterRequest } from "./newsletter.types";

export class NewsletterController {
  async subscribe(
    req: Request<{}, {}, SubscribeNewsletterRequest>,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const result = await newsletterService.subscribe(req.body);
      return sendSuccess(res, result, "Successfully subscribed to newsletter");
    } catch (error) {
      next(error);
    }
  }
}

export const newsletterController = new NewsletterController();
