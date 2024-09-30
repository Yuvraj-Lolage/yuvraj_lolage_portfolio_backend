const { ProjectModel } = require('../models/project_model')

const getAllProjects = (req,res) => {
    try {
        const project = ProjectModel.find({}).then((result)=>{
            res.send(result);
        })
    } catch (error) {
        
    }
}

module.exports = {
    getAllProjects
}

