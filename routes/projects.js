const express = require('express');
const ProjectRouter = express.Router();
const { getAllProjects, getProjectById, getProjectByCategory } = require('../controllers/projects');

ProjectRouter.get('/', getAllProjects)

ProjectRouter.get('/getProject/:id', getProjectById)

ProjectRouter.get('/projects/:category', getProjectByCategory)

module.exports = {
    ProjectRouter
}


