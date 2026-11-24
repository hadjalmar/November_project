const express = require("express");
const { eq } = require("drizzle-orm");

const db = require("../db/db");
const { lessons } = require("../db/schema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await db.select().from(lessons);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});
module.exports = router;
