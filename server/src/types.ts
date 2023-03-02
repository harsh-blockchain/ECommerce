import { PrismaClient } from "@prisma/client";

/* defining product type */

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  quantity: number;
  reviews: Review[];
  order: Order;
};

/* defining review type */

export type Review = {
  id: number;
  rating: number;
  comment: string;
};

/* defining order type */

export type Order = {
  id: string;
  total: number;
  products: Product[];
  user: User;
};

/* product input */

export type ProductInput = {
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  quantity: number;
};

export interface Session {
  user: User;
  expires: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  image: string;
  name: string;
  emailVerified: boolean;
}

export interface GraphQlContext {
  session: Session | null;
  prisma: PrismaClient;
  //pubsub
}

export type OrderInput = {
  id: string;
  name: string;
  price: number;
  image: string[];
  category: string;
  quantity: number;
};
