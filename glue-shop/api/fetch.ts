import api from "./";

export const fetchCategories = async () => {
  console.log("Fetching categories...");

  const response = await api.get("users/categories");
  // Simulate a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response.data;
};
