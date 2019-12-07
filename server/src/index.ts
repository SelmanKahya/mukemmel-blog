import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { createConnection, getMongoManager, MongoEntityManager } from "typeorm";
import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server-express";
// graphql resolvers
import resolvers from "./graphql/resolvers/index";

// dotenv setup
dotenv.config();

// graphql type definition
const typeDefs: string = importSchema("src/graphql/schema.graphql");
// make schema that includes our resolvers and typeDefs
const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

// create typeorm connection that includes database connection and start apollo server
createConnection().then((): void => {
  const server: ApolloServer = new ApolloServer({
    schema
  });

  const app = express();

  app.use(cors());

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
});
