const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "login",
  password: "123",
  port: 5432,
});

// Registration route

router.post("/register", async (req, res) => {
  const { username, email, password, userRole } = req.body;

  try {
    // Check if the email is already registered
    const emailCheckQuery = "SELECT * FROM registration WHERE email = $1";
    const emailCheckValues = [email];
    const existingUser = await pool.query(emailCheckQuery, emailCheckValues);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user data into the database
    const insertUserQuery =
      "INSERT INTO registration (username, email, password, userRole) VALUES ($1, $2, $3, $4)";
    const values = [username, email, hashedPassword, userRole];

    await pool.query(insertUserQuery, values);
    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Retrieve user data from the database
    const selectUserQuery = "SELECT * FROM registration WHERE email = $1"; // Corrected table name here
    const values = [email];
    const result = await pool.query(selectUserQuery, values);
    const user = result.rows[0];

    if (user && (await bcrypt.compare(password, user.password))) {
      // User authentication successful
      res.status(200).json({ user: user });
    } else {
      // User authentication failed
      res.status(401).json({ error: "Login failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
