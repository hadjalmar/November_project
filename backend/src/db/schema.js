const { datetime } = require("drizzle-orm/mysql-core");
const { mysqlTable, int, varchar } = require("drizzle-orm/mysql-core");

const users = mysqlTable('users', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name',{length: 100}).notNull(),
  email: varchar('email',{length: 255}).notNull().unique(),
  password: varchar('password',{length: 100}).notNull(),
  role: varchar('role', {length: 10}).notNull().default('visitor')
});

const teachers = mysqlTable('teachers',{
  id: int('id').primaryKey.autoincrement(),
  name: varchar('name', {length: 50}).notnull()
})

const lessons = mysqlTable('lessons', {
  id: int('id').primaryKey.autoincrement(),
  subject: varchar('subject',{length: 50}).notNull(),
  room: varchar('room',{length: 50}).notNull(),
  teachers_id: varchar('teachers_id').references(()=> teachers.id),
  capacity: int('capacity',{length: 5}),
  starts: datetime('starts').notNull(),
  ends: datetime('starts').notNull(),
})

module.exports = { users, teachers, lessons};