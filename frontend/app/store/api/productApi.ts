import { baseApi } from "./baseApi";
import type { Product, ApiResponse } from "../../types";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPopularProducts: builder.query<ApiResponse<Product[]>, void>({
      query: () => "/products/popular",
      providesTags: ["Product"],
    }),
    getBestSells: builder.query<ApiResponse<Product[]>, void>({
      query: () => "/products/best-sells",
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetPopularProductsQuery, useGetBestSellsQuery } = productApi;
