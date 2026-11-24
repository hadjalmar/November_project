const { primaryKey } = require("drizzle-orm/gel-core");
const { datetime } = require("drizzle-orm/mysql-core");
const { mysqlTable, int, varchar } = require("drizzle-orm/mysql-core");

const users = mysqlTable("users", {
  id: int("id", { length: 10 }).primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 100 }).notNull(),
  role: varchar("role", { length: 10 }).notNull().default("visitor"),
});

const teachers = mysqlTable("teachers", {
  id: int("id", { length: 10 }).primaryKey().autoincrement(),
  name: varchar("name", { length: 50 }).notNull(),
});

const lessons = mysqlTable("lessons", {
  id: int("id", { length: 10 }).primaryKey().autoincrement(),
  subject_id: int("subject_id", { length: 10 })
    .notNull()
    .references(() => subject.id, { onDelete: "cascade" }),
  room_id: int("room_id", { length: 10 })
    .notNull()
    .references(() => rooms.id, { onDelete: "cascade" }),
  teachers_id: int("teachers_id", { length: 10 })
    .notNull()
    .references(() => teachers.id, { onDelete: "cascade" }),
  capacity: int("capacity", { length: 5 }),
  starts: datetime("starts").notNull(),
  ends: datetime("ends").notNull(),
});

const rooms = mysqlTable("rooms", {
  id: int("id", { length: 10 }).primaryKey().autoincrement(),
  name: varchar("name", { length: 50 }).notNull(),
});

const subject = mysqlTable("subject", {
  id: int("id", { length: 10 }).primaryKey().autoincrement(),
  name: varchar("name", { length: 50 }).notNull(),
});

const lesson_registrations = mysqlTable(
  "lesson_registrations",
  {
    lessons_id: int("lessons_id", { length: 10 })
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    users_id: int("users_id", { length: 10 })
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.lessons_id, table.users_id] }),
  }),
);

module.exports = {
  users,
  teachers,
  lessons,
  rooms,
  subject,
  lesson_registrations,
};
