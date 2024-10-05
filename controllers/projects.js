const { ProjectModel } = require('../models/project_model')

const getAllProjects = (req,res) => {
    try {
        const project = ProjectModel.find({}).then((result)=>{
            res.send(result);
        })
    } catch (error) {
        
    }
}

const getProjectById = (req,res) => {
    try {
        const projectId = req.params.id;
        const project = ProjectModel.find({ _id: projectId }).then((result)=>{
            res.send(result);
        })
    } catch (error) {
        
    }
}

module.exports = {
    getAllProjects,
    getProjectById
}

