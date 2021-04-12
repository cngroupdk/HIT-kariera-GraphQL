import dotenv from 'dotenv-flow';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import { getDbConnection } from './libs/sqlite';

import { typeDefs } from './schema';
import { rootResolver } from './rootResolver';

dotenv.config();

const main = async () => {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors());

  const dbConnection = await getDbConnection();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: rootResolver,
    context: async ({ req, res }) => {
      // TODO: use something like `req.headers.Authorization`
      const userId = 2;

      return { req, res, dbConnection, userId };
    },
    playground: true,
  });
  apolloServer.applyMiddleware({ app, cors: false });

  app.get('/', (_, res) => res.redirect('/graphql'));

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.info(`Server started at http://localhost:${port}/graphql`);
  });
};

main();
