import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const getAllProducts = async (options: any) => {
  return prisma.product.findMany(options);
};

export const getProductById = async (productId: number, userId: number) => {
  return prisma.product.findUnique({
    where: { id: productId },
    include: {
      colors: {
        select: {
          color: true,
        },
      },
      sizes: {
        select: {
          size: true,
        },
      },
      users: {
        where: {
          id: userId,
        },
        select: {
          id: true,
        },
      },
      images: {
        select: {
          id: true,
          image: true,
        },
      },
    },
  });
};

export const addProductToFavourite = async (
  productId: number,
  userId: number
) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      products: {
        connect: {
          id: productId,
        },
      },
    },
    select: {
      id: true,
    },
  });
};

export const removeProductFromFavourite = async (
  productId: number,
  userId: number
) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      products: {
        disconnect: {
          id: productId,
        },
      },
    },
    select: {
      id: true,
    },
  });
};
