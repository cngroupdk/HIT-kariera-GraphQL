export const rootResolver = {
  Query: {
    quacks: async (_, __, { dbConnection }) => {
      const quacks = await dbConnection.all(
        `
        SELECT * FROM quack
        ORDER BY datetime(createdAt) DESC
        LIMIT 10
        `,
      );
      return quacks;
    },
    users: async (_, __, { dbConnection }) => {
      const users = await dbConnection.all(
        `
        SELECT * FROM user
        LIMIT 10
        `,
      );
      return users;
    },
    user: async (_, args, { dbConnection }) => {
      const user = await dbConnection.get(
        `
        SELECT * FROM user
        WHERE userName = ?
        `,
        [args.userName],
      );
      return !user ? null : user;
    },
  },
  Mutation: {
    addQuack: async (_, args, { dbConnection, userId }) => {
      const createdAt = new Date().toISOString();
      const theText = args.text.trim();
      if (!theText) throw Error('Text is required');
      if (theText.length > 250) throw Error('Max length is 250');

      const insertResponse = await dbConnection.run(
        `
        INSERT INTO quack
        (userId, text, createdAt)
        VALUES (?, ?, ?)
        `,
        [userId, theText, createdAt],
      );

      const quack = await dbConnection.get(
        `
        SELECT * FROM quack
        WHERE id = ?
        `,
        [insertResponse.lastID],
      );

      return quack;
    },
  },
  User: {
    async quacks(parent, _, { dbConnection }) {
      return await dbConnection.all(
        `
        SELECT * FROM quack
        WHERE userId = ?
        ORDER BY datetime(createdAt) DESC
        LIMIT 10
        `,
        [parent.id],
      );
    },
  },
  Quack: {
    async user(parent, _, { dbConnection }) {
      return await dbConnection.get(
        `
        SELECT * FROM user
        WHERE id = ?
        `,
        [parent.userId],
      );
    },
  },
};
