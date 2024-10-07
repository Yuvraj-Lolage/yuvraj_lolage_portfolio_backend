const { ProjectModel } = require('../models/project_model')

const getAllProjects = (req,res) => {
    try {
        const project = ProjectModel.find({}).then((result)=>{
            return res.send(result);
        })
    } catch (error) {
        return res.send(500);   
    }
}

const getProjectById = (req,res) => {
    try {
        const projectId = req.params.id;
        const project = ProjectModel.find({ _id: projectId }).then((result)=>{
            return res.send(result);
        })
    } catch (error) {
        return res.send(500);  
    }
}

const getProjectByCategory = (req, res) => {
    try {
        const projCategory = req.params.category;
        const project = ProjectModel.find({ category: projCategory }).then((result)=>{
            return res.send(result);
        })
    } catch (error) {
        return res.send(500);  
    }
}

module.exports = {
    getAllProjects,
    getProjectById,
    getProjectByCategory
}

