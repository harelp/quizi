const express = require('express');
const quizController = require('./../controllers/quizController');

const router = express.Router();

// router.param('id', tourController.checkID);
router
    .route('/')
    .get(quizController.getAllQuizzes)
    .post(quizController.createQuiz);

router
    .route('/:id')
    .get(quizController.getQuiz)
//     .patch()
//     .delete();

module.exports = router;
