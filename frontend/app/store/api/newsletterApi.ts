import { baseApi } from "./baseApi";
import type { ApiResponse } from "../../types";

interface SubscribeNewsletterRequest {
  email: string;
}

interface SubscribeNewsletterResponse {
  email: string;
  subscribed: boolean;
  message: string;
}

export const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation<
      ApiResponse<SubscribeNewsletterResponse>,
      SubscribeNewsletterRequest
    >({
      query: (body) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSubscribeNewsletterMutation } = newsletterApi;
