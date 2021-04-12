export const rootResolver = {
  Query: {
    quacks: async (_, __, { dbConnection }) => {
      return [
        {
          id: 1,
          createdAt: '2019-08-08T05:43:18.023Z',
          userId: 2,
          text: 'Quack 1',
        },
        {
          id: 2,
          createdAt: '2019-08-06T14:10:51.023Z',
          userId: 2,
          text: 'Quack 2',
        },
        {
          id: 3,
          createdAt: '2019-08-03T09:09:34.023Z',
          userId: 2,
          text: 'Quack 3',
        },
      ];
    },
    users: async (_, __, { dbConnection }) => {
      return [];
    },
    user: async (_, args, { dbConnection }) => {
      const user = null;
      return !user ? null : user;
    },
  },
  Mutation: {
    addQuack: async (_, args, { dbConnection, userId }) => {
      const createdAt = new Date().toISOString();
      const theText = args.text.trim();
      if (!theText) throw Error('Text is required');
      if (theText.length > 250) throw Error('Max length is 250');

      const quack = {
        id: 1,
        createdAt,
        userId: 2,
        text: '123',
      };

      return quack;
    },
  },
  User: {
    async quacks(parent, _, { dbConnection }) {
      return [];
    },
  },
  Quack: {
    async user(parent, _, { dbConnection }) {
      return null;
    },
  },
};
