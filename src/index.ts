import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({ typeDefs, resolvers });

const main = async () => {
  try {
    await AppDataSource.initialize();
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await user.save();
    const { url } = await server.listen();
    console.log(`🚀  Server ready at ${url}`);
  } catch (error) {
    console.error(error);
  }
};

main();
