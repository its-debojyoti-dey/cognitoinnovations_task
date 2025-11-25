import nodemailer from "nodemailer";
import { config } from "../../config";

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });
};

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Generic email sending function
 */
export const sendEmail = async (options: EmailOptions): Promise<void> => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: config.email.from,
      to: options.to,
      subject: options.subject,
      text: options.text || options.subject,
      html: options.html,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

/**
 * Send newsletter subscription confirmation email
 */
export const sendNewsletterConfirmation = async (
  email: string
): Promise<void> => {
  const subject = "Welcome to Our Newsletter!";
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Newsletter Subscription Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 5px;">
        <h1 style="color: #3BB77E; text-align: center;">Thank You for Subscribing!</h1>
        <p>Dear Subscriber,</p>
        <p>We're thrilled to have you join our newsletter community! You've successfully subscribed to receive updates, special offers, and the latest news from Nest Mart.</p>
        <p>You'll now receive:</p>
        <ul>
          <li>Exclusive deals and discounts</li>
          <li>New product announcements</li>
          <li>Seasonal promotions</li>
          <li>Tips and recipes</li>
        </ul>
        <p>Stay tuned for exciting content coming your way!</p>
        <p style="margin-top: 30px;">Best regards,<br>The Nest Mart Team</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; color: #666; text-align: center;">
          If you did not subscribe to this newsletter, please ignore this email.
        </p>
      </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: email,
    subject,
    html,
  });
};

/**
 * Send order confirmation email with order details
 */
export const sendOrderConfirmation = async (
  email: string,
  orderDetails: {
    orderNumber: string;
    items: Array<{
      title: string;
      quantity: number;
      price: number;
      size?: string;
    }>;
    total: number;
    billingDetails: {
      firstName: string;
      lastName: string;
      address?: string;
      city: string;
      postCode?: string;
      country: string;
      region?: string;
    };
    paymentMethod?: string;
  }
): Promise<void> => {
  const itemsHtml = orderDetails.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.title}${
        item.size ? ` (${item.size})` : ""
      }</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: center;">${
        item.quantity
      }</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${item.price.toFixed(
        2
      )}</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${(
        item.price * item.quantity
      ).toFixed(2)}</td>
    </tr>
  `
    )
    .join("");

  const subject = `Order Confirmation - ${orderDetails.orderNumber}`;
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 5px;">
        <h1 style="color: #3BB77E; text-align: center;">Order Confirmation</h1>
        <p>Dear ${orderDetails.billingDetails.firstName} ${
    orderDetails.billingDetails.lastName
  },</p>
        <p>Thank you for your order! We've received your order and are processing it now.</p>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Order Details</h2>
          <p><strong>Order Number:</strong> ${orderDetails.orderNumber}</p>
          ${
            orderDetails.paymentMethod
              ? `<p><strong>Payment Method:</strong> ${orderDetails.paymentMethod}</p>`
              : ""
          }
        </div>

        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Order Items</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background-color: #f9f9f9;">
                <th style="padding: 10px; text-align: left; border-bottom: 2px solid #ddd;">Item</th>
                <th style="padding: 10px; text-align: center; border-bottom: 2px solid #ddd;">Quantity</th>
                <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Price</th>
                <th style="padding: 10px; text-align: right; border-bottom: 2px solid #ddd;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" style="padding: 10px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">Total:</td>
                <td style="padding: 10px; text-align: right; font-weight: bold; border-top: 2px solid #ddd;">$${orderDetails.total.toFixed(
                  2
                )}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Shipping Address</h2>
          <p>
            ${orderDetails.billingDetails.firstName} ${
    orderDetails.billingDetails.lastName
  }<br>
            ${orderDetails.billingDetails.address || ""}<br>
            ${orderDetails.billingDetails.city}${
    orderDetails.billingDetails.postCode
      ? `, ${orderDetails.billingDetails.postCode}`
      : ""
  }<br>
            ${
              orderDetails.billingDetails.region
                ? `${orderDetails.billingDetails.region}, `
                : ""
            }${orderDetails.billingDetails.country}
          </p>
        </div>

        <p>We'll send you another email when your order ships. If you have any questions, please don't hesitate to contact us.</p>
        <p style="margin-top: 30px;">Best regards,<br>The Nest Mart Team</p>
      </div>
    </body>
    </html>
  `;

  await sendEmail({
    to: email,
    subject,
    html,
  });
};
