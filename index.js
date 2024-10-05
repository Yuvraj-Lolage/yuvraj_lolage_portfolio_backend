const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT_NUMBER || 5000;
const { ProjectRouter } = require('./routes/projects');

//Database Connection
const connection = mongoose.connect(`${ process.env.DATABASE_URL }`);

connection ? console.log("Database connection Success") : console.log("Error Connection");
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use(ProjectRouter);

app.listen(port, () => {
    console.log(`App lisening on port ${port}`);
});

