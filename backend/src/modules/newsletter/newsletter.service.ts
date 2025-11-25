import { sendNewsletterConfirmation } from "../../common/utils/email.util";
import {
  SubscribeNewsletterRequest,
  SubscribeNewsletterResponse,
} from "./newsletter.types";

export class NewsletterService {
  async subscribe(
    request: SubscribeNewsletterRequest
  ): Promise<SubscribeNewsletterResponse> {
    const { email } = request;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    try {
      // Send confirmation email
      await sendNewsletterConfirmation(email);

      return {
        email,
        subscribed: true,
        message: "Successfully subscribed to newsletter",
      };
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      throw new Error("Failed to subscribe to newsletter");
    }
  }
}

export const newsletterService = new NewsletterService();
