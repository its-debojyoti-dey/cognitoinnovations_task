import { sendOrderConfirmation } from "../../common/utils/email.util";
import { PlaceOrderRequest, OrderResponse } from "./order.types";

export class OrderService {
  private generateOrderNumber(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `ORD-${timestamp}-${random}`;
  }

  async placeOrder(request: PlaceOrderRequest): Promise<OrderResponse> {
    // Validate request
    if (
      !request.billingDetails ||
      !request.items ||
      request.items.length === 0
    ) {
      throw new Error("Invalid order request");
    }

    if (!request.billingDetails.firstName || !request.billingDetails.lastName) {
      throw new Error("First name and last name are required");
    }

    if (!request.billingDetails.city || !request.billingDetails.country) {
      throw new Error("City and country are required");
    }

    // Generate order details
    const orderNumber = this.generateOrderNumber();
    const now = new Date().toISOString();

    const orderResponse: OrderResponse = {
      id: Date.now(), // In a real app, this would come from database
      orderNumber,
      status: "pending",
      total: request.total,
      items: request.items,
      billingDetails: request.billingDetails,
      createdAt: now,
      updatedAt: now,
    };

    // Get customer email from request
    const customerEmail =
      request.customerEmail || request.billingDetails.email || "";

    // Send order confirmation email if email is provided
    if (customerEmail) {
      try {
        await sendOrderConfirmation(customerEmail, {
          orderNumber,
          items: request.items,
          total: request.total,
          billingDetails: request.billingDetails,
          paymentMethod: request.paymentMethod,
        });
      } catch (error) {
        console.error("Error sending order confirmation email:", error);
        // Don't fail the order if email fails, just log the error
      }
    }

    return orderResponse;
  }
}

export const orderService = new OrderService();
