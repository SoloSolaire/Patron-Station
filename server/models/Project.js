const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user_id: {
    type: Number,
    references: {
      model: 'user',
      key: 'id',
    },
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;