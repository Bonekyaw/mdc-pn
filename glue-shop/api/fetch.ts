import { ProductType } from "@/types";
import api from "./";

export const fetchCategories = async () => {
  console.log("Fetching categories...");

  const response = await api.get("users/categories");
  // Simulate a delay for demonstration purposes
  // Do not Use in Production
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return response.data;
};

export const fetchProducts = async ({
  pageParam,
  categoryId,
}: {
  pageParam: number | undefined;
  categoryId: number;
}) => {
  console.log("Fetching products...", pageParam, "Category : ", categoryId);

  let url = `users/products?limit=2&category=${categoryId}`;
  if (pageParam) {
    url += `&cursor=${pageParam}`;
  }

  const response = await api.get(url);
  // Simulate a delay for demonstration purposes
  // Do not Use in Production
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return response.data;
};

export const toggleFavourite = async ({
  productId,
  favourite,
}: {
  productId: number;
  favourite: boolean;
}) => {
  console.log("Favourite api --------", productId);

  const response = await api.patch("users/products/favourite-toggle", {
    productId,
    favourite,
  });

  // Simulate a delay for demonstration purposes
  // Do not Use in Production
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return response.data;
};

export const fetchProduct = async (productId: number): Promise<ProductType> => {
  console.log("Fetching product details for ID:", productId);

  const response = await api.get(`users/products/${productId}`);
  return response.data;
};
