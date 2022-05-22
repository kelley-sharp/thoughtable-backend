import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { seedData } from "./seed";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
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
