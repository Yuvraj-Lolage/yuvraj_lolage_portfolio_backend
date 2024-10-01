const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const { ProjectRouter } = require('./routes/projects');

//Database Connection
const connection = mongoose.connect('mongodb+srv://yuvraj:yuvraj@cluster0.mamoiv2.mongodb.net/portfolio');

connection ? console.log("Database connection Success") : console.log("Error Connection");
app.use(cors({
    origin: '*',  // or specify domains you want to allow
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(ProjectRouter);

app.listen(port, () => {
    console.log(`App lisening on port ${port}`);
});

