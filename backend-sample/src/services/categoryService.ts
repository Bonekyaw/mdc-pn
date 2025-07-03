import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getAllCategories = async () => {
  return prisma.category.findMany();
};
