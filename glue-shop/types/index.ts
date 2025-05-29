export interface CategoryType {
  id: number;
  name: string;
  image: any;
}

interface UserType {
  id: number;
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
}
