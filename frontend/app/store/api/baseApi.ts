import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApiResponse } from "../../types";

// Get base URL from environment variable or use default
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
      // Add auth token if available
      // const token = (getState() as RootState).auth?.token;
      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Order", "Product"],
  endpoints: () => ({}),
});
