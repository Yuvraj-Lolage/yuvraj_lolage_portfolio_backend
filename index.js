const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const { ProjectRouter } = require('./routes/projects');

//Database Connection
const connection = mongoose.connect('mongodb+srv://yuvraj:yuvraj@cluster0.mamoiv2.mongodb.net/portfolio');

connection ? console.log("Database connection Success") : console.log("Error Connection");
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://yuvraj-lolage-portfolio-backend-f28wh7kb5.vercel.app/");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
})
app.use(ProjectRouter);

app.listen(port, () => {
    console.log(`App lisening on port ${port}`);
});

