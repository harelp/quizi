const express = require('express');
const quizController = require('./../controllers/quizController');

const router = express.Router();

// router.param('id', tourController.checkID);
router.get('/quiz/:id', quizController.getQuizByUser);
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
//     .delete();

module.exports = router;
