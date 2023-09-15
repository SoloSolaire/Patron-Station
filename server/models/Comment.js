const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  comment_description: {
    type: String,
  },
  date_created: {
    type: Date,
    required: true,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'blog',
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;