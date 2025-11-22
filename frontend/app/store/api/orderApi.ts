import { baseApi } from "./baseApi";
import type {
  PlaceOrderRequest,
  OrderResponse,
  ApiResponse,
} from "../../types";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation<ApiResponse<OrderResponse>, PlaceOrderRequest>(
      {
        query: (orderData) => ({
          url: "/orders",
          method: "POST",
          body: orderData,
        }),
        invalidatesTags: ["Order"],
      }
    ),
    getOrder: builder.query<ApiResponse<OrderResponse>, string | number>({
      query: (orderId) => `/orders/${orderId}`,
      providesTags: (result, error, orderId) => [
        { type: "Order", id: orderId },
      ],
    }),
    getOrders: builder.query<ApiResponse<OrderResponse[]>, void>({
      query: () => "/orders",
      providesTags: ["Order"],
    }),
  }),
});

export const { usePlaceOrderMutation, useGetOrderQuery, useGetOrdersQuery } =
  orderApi;
