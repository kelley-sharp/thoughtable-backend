import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { seedData } from "./seed";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import dotenv from "dotenv";
import { JWT_SECRET_KEY } from "./constants";
import jwt from "jsonwebtoken";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
  context: ({ req }) => {
    // Note: This example uses the `req` argument to access headers,
    // but the arguments received by `context` vary by integration.
    // This means they vary for Express, Koa, Lambda, etc.
    //
    // To find out the correct arguments for a specific integration,
    // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

    // Get the user token from the headers.
    const token = req.headers.authorization?.split("Bearer ")[1] || "";

    let userId = null;
    // Try to retrieve a user with the token
    if (token) {
      try {
        const decodedToken = jwt.verify(token, JWT_SECRET_KEY);
        userId = (decodedToken as any).userId;
      } catch (error) {
        console.log(error);
      }
    }

    // Add the user ID to the context
    return { userId };
  },
});

const main = async () => {
  try {
    await AppDataSource.initialize();
    await seedData();
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
  } catch (error) {
    console.error(error);
  }
};

main();
