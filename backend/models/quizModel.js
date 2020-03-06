const mongoose = require('mongoose');
const nanoid = require('nanoid');

const date = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return (today = mm + '/' + dd + '/' + yyyy);
};

// schema = boilerplate for quiz collection
const quizSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(4)
  },
  name: {
    type: String,
    trim: true //removes white spaces from start and the end
  },
  description: {
    type: String,
    trim: true
  },
  dateCreated: {
    type: String,
    default: date()
  },
  private: {
    type: Boolean,
    default: false
  },
  content: [],
  userId: String,
  leaderBoard: []
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
