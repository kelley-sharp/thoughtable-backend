import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";
import { seedData } from "./seed";

const server = new ApolloServer({ typeDefs, resolvers });

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
