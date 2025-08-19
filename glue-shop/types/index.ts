export interface CategoryType {
  id: number;
  name: string;
  image: any;
}

interface UserType {
  id: number;
}

interface ImageType {
  id: number;
  image: string;
}

interface ColorType {
  color: {
    id: number;
    name: string;
    bgColor: string;
  };
}

interface SizeType {
  size: {
    id: number;
    name: string;
  };
}

export interface ProductType {
  id: number;
  categories_id: number;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  users: UserType[];
  description: string;
  images: ImageType[];
  colors: ColorType[];
  sizes: SizeType[];
}

export interface CartItem {
  id: number;
  color: string;
  size: string;
  quantity: number;
}

export interface CartType {
  id: number;
  title: string;
  price: number;
  image: any;
  items: CartItem[];
}
