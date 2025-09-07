const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connection = require('./db');
const PORT = process.env.PORT || 5000;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});