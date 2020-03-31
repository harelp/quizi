const Quiz = require('./../models/quizModel'); // import for quiz

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find()
      .where('private')
      .equals(false);
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
    if (quiz === null) throw error;
    else {
      res.status(200).json(quiz);
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    await Quiz.deleteOne({ _id: req.params.id });
    res.status(201).send('done');
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getQuizByUser = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ userId: req.params.id });
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

exports.updateDetailsOnQuiz = async (req, res) => {
  const { name, description, private } = req.body;
  try {
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      {
        name: name,
        description: description,
        private: private
      },
      {
        new: true
      }
    );
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.addQuestion = async (req, res) => {
  try {
    await Quiz.findByIdAndUpdate(
      req.params.id,
      { $push: { content: req.body } },
      { safe: true, upsert: true }
    );
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateQuestionOnQuiz = async (req, res) => {
  const { question, answers, correctAns } = req.body;

  try {
    await Quiz.updateOne(
      { 'content.cId': req.params.cId },
      {
        $set: {
          'content.$.question': question,
          'content.$.answers': answers,
          'content.$.correctAns': correctAns
        }
      }
    );
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    await Quiz.findByIdAndUpdate(
      req.params.id,
      { $pull: { content: { cId: req.params.cId } } },
      { safe: true, upsert: true }
    );
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

// Update Points
exports.updatePoints = async (req, res) => {
  const { playerId, points, playerName } = req.body;
  try {
    await Quiz.updateOne(
      { 'leaderBoard.playerId': playerId },
      {
        $set: {
          'leaderBoard.$.points': points,
          'leaderBoard.$.playerName': playerName
        }
      }
    );
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.newPoints = async (req, res) => {
  try {
    await Quiz.findByIdAndUpdate(
      req.params.id,
      { $push: { leaderBoard: req.body } },
      { safe: true, upsert: true }
    );
    const quiz = await Quiz.findById(req.params.id);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
