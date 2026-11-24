const express = require("express");
const { eq } = require("drizzle-orm");

const db = require("../db/db");
const { teachers } = require("../db/schema");
const errorHandler = require("../utilities/errorHandler");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(404).json({ message: "name is required!" });

    const [result] = await db.insert(teachers).values({ name });
    return res.status(201).json({ message: "Successful post!" });
  } catch (err) {
    return errorHandler(res, err);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await db.select().from(teachers);
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});
module.exports = router;
