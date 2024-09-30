const express = require('express');
const ProjectRouter = express.Router();
const { getAllProjects } = require('../controllers/projects');

ProjectRouter.get('/', getAllProjects)

ProjectRouter.post('/addProject',)

module.exports = {
    ProjectRouter
}


