import { Router } from "express";
import { newsletterController } from "./newsletter.controller";

const router = Router();

router.post("/subscribe", (req, res, next) =>
  newsletterController.subscribe(req, res, next)
);

export const newsletterRoutes: Router = router;
