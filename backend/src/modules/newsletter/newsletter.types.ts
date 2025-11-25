export interface SubscribeNewsletterRequest {
  email: string;
}

export interface SubscribeNewsletterResponse {
  email: string;
  subscribed: boolean;
  message: string;
}
