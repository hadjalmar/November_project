const { mysqlTable, int, varchar } = require("drizzle-orm/mysql-core");

const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name',{length: 100}).notNull(),
  email: varchar('email',{length: 255}).notNull().unique(),
  passwordHash: varchar('password_hash',{length: 100}).notNull(),
  role: varchar('role', {length: 10}).notNull().default('visitor')
});

module.exports = { users };