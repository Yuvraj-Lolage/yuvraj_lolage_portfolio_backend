const express = require('express');
const ProjectRouter = express.Router();
const { getAllProjects, getProjectById } = require('../controllers/projects');

ProjectRouter.get('/', getAllProjects)

ProjectRouter.get('/getProject/:id', getProjectById)

module.exports = {
    ProjectRouter
}


