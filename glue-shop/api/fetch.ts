import api from "./";

export const fetchCategories = async () => {
  console.log("Fetching categories...");

  const response = await api.get("users/categories");
  return response.data;
};
