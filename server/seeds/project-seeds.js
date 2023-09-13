const { Project } = require("../models");

const projectData = [
  { 
    title: 'Test Title',
    project_description: 'Testing if project post works.',
    user_id: 1
  }
];

const seedProject = () => Project.bulkCreate(projectData);

module.exports = seedProject;