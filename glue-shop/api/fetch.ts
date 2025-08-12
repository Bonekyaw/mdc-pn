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
