import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://192.168.100.128:4000";

export const apiSlice = createApi({
  reducerPath: "api", // optional, defaults to 'api'
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
