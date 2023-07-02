import pgPromise from "pg-promise"

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/planets")
console.log(db)

const setupDb = async () => {
    await db.none(`
  DROP TABLE IF EXISTS planets;

  CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
      );

  DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  token TEXT
);
  `);

    await db.none(`INSERT INTO users (username, password) VALUES ('Anto', '1234')`);
};
setupDb();

export { db };