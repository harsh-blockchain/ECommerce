import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs/sample";
import { resolvers } from "./graphql/resolvers/sample";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { GraphQlContext, Session } from "./types";
import cors from "cors";
import express from "express";
import http from "http";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";
import * as dotenv from "dotenv";

const func = async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: ["http://localhost:3000", "http://localhost:4000"],
    }),
    json(),
    expressMiddleware(server)
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 5000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:5000/graphql`);
};

func();
