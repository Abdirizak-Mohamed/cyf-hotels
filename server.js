const express = require("express");
const app = express();
const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
app.get("/hotels", function(req, res) {
    pool
        .query("SELECT * FROM hotels")
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
});
const port = process.env.PORT
app.listen(port, function() {
    console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});