const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const prisma = require('./db');
const PORT = process.env.PORT || 5000;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get("/users", async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});