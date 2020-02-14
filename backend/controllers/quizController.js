const Quiz = require('./../models/quizModel'); // import for quiz

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    quizzes.map(el => {
      if (el.userId) {
        el.userId = undefined;
      }
    });
    res.status(200).json(quizzes);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = await Quiz.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        quizzes: newQuiz
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.upDateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
