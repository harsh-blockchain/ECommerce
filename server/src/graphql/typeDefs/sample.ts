import { OrderInput } from "./../../types";
import { ProductInput } from "./../../../../client/src/utils/types";
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Mutation {
    createProduct(input: ProductInput!): Product!
    deleteProduct(id: ID!): Product!
    updateProduct(id: ID!, input: ProductInput!): Product!
    createOrder(userId: String!, total: Int!, products: [OrderInput]!): Order!
  }

  input OrderInput {
    id: String!
    name: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
  }

  input ProductInput {
    name: String!
    description: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
  }

  input Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
    reviews: [Review!]!
    order: Order!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Int!
    image: [String!]
    category: String!
    quantity: Int!
    reviews: [Review!]!
    order: Order!
  }

  type Review {
    id: ID!
    rating: Int!
    comment: String!
    product: Product!
  }

  type Order {
    id: ID!
    total: Int!
    products: [Product!]!
    userId: String!
  }

  type User {
    id: ID!
    name: String
    email: String
    emailVerified: String
    image: String
  }

  type Query {
    getProducts: [Product!]!
    getOrders: [Order!]!
  }
`;
