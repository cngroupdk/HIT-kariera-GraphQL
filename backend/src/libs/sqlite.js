const dotenv = require('dotenv-flow');
const sqlite3 = require('sqlite-async');
const path = require('path');
const fs = require('fs/promises');

const ROOT = path.resolve(__dirname, '../..');

async function seed() {
  dotenv.config();
  const db = await getDbConnection();

  const seedSql = await fs.readFile(path.join(ROOT, 'db/seed.sql'), 'utf8');

  await db.exec(seedSql);
}

let db = null;
async function getDbConnection() {
  if (db === null) {
    db = await sqlite3.open(path.join(ROOT, `${process.env.DB_FILE}`));
  }
  return db;
}

module.exports = {
  seed,
  getDbConnection,
};
