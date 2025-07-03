import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id }, // { phone }
  });
};
