const express = require('express');
const quizController = require('./../controllers/quizController');

const router = express.Router();

router.get('/quiz/:id', quizController.getQuizByUser);
router.patch('/updatePoints/:id', quizController.updatePoints);
router.patch('/newPoints/:id', quizController.newPoints);
router
  .route('/')
  .get(quizController.getAllQuizzes)
  .post(quizController.createQuiz);

router
  .route('/:id')
  .get(quizController.getQuiz)
  .patch(quizController.updateDetailsOnQuiz)
  .delete(quizController.deleteQuiz)
  .post(quizController.addQuestion);

router
  .route('/:id/:cId')
  .patch(quizController.updateQuestionOnQuiz)
  .post(quizController.deleteQuestion);

module.exports = router;
