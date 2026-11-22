const { mysqlTable, int, varchar } = require("drizzle-orm/mysql-core");

const users = mysqlTable('nyiltnap', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').notNull().default('visitor'), 
  createdAt: timestamp('created_at').defaultNow().notNull(),
});



module.exports = { users };