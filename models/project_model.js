const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        projectName:{
            type:String,
            required:true
        },
        projectThumbnail:{
            type:String,
            required:true
        },
        projectVideo:{
            type:String,
            required:true
        },
        projectDescription:{
            type:String,
            required:true
        },
        projectFeatured:{
            type:Boolean,
            required:true
        }
    }
)

const ProjectModel = new mongoose.model('Project', ProjectSchema);

module.exports = {
    ProjectModel
}