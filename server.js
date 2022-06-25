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

app.get("/bookings", function(req, res) {
    pool
        .query("SELECT * FROM bookings")
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
});

app.get("/customers", function(req, res) {
    pool
        .query("SELECT * FROM customers")
        .then((result) => res.json(result.rows))
        .catch((error) => {
            console.error(error);
            res.status(500).json(error);
        });
});

const port = process.env.PORT
app.listen(4000, function() {
    console.log(`Server is listening on port ${3000}. Ready to accept requests!`);
});

//export DATABASE_URL=postgres://ygwmshlxhlxldp:29336236b2d2a3f566162bdb57811f03d64a135c074c3b77fd174c7af27bfd19@ec2-34-248-169-69.eu-west-1.compute.amazonaws.com:5432/d6n4mps1bqfotu