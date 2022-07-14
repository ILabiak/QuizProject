const express = require("express");
const router = express.Router();

const UserController = require("../controllers").users;
const ImageController = require("../controllers").images;
const QuestionController = require("../controllers").questions;
const QuestionAnswerController = require("../controllers").questionAnswers;
const QuizController = require("../controllers").quizzes;
const QuizResultController = require("../controllers").quizResults;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Users Router */
router.get("/api/users", UserController.list);
router.get("/api/users/:id", UserController.getById);
router.post("/api/users", UserController.add);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);

/* Images Router */
router.get("/api/images", ImageController.list);
router.get("/api/images/:id", ImageController.getById);
router.post("/api/images", ImageController.add);
router.put('/api/images/:id', ImageController.update);
router.delete('/api/images/:id', ImageController.delete);

/* Questions Router */
router.get("/api/questions", QuestionController.list);
router.get("/api/questions/:id", QuestionController.getById);
router.post("/api/questions", QuestionController.add);
router.put('/api/questions/:id', QuestionController.update);
router.delete('/api/questions/:id', QuestionController.delete);

/* QuestionAnswers Router */
router.get("/api/questionanswers", QuestionAnswerController.list);
router.get("/api/questionanswers/:id", QuestionAnswerController.getById);
router.post("/api/questionanswers", QuestionAnswerController.add);
router.put('/api/questionanswers/:id', QuestionAnswerController.update);
router.delete('/api/questionanswers/:id', QuestionAnswerController.delete);

/* Quizzes Router */
router.get("/api/quizzes", QuizController.list);
router.get("/api/quizzes/:id", QuizController.getById);
router.post("/api/quizzes", QuizController.add);
router.put('/api/quizzes/:id', QuizController.update);
router.delete('/api/quizzes/:id', QuizController.delete);

/* QuizResults Router */
router.get("/api/quizresults", QuizResultController.list);
router.get("/api/quizresults/:id", QuizResultController.getById);
router.post("/api/quizresults", QuizResultController.add);
router.put('/api/quizresults/:id', QuizResultController.update);
router.delete('/api/quizresults/:id', QuizResultController.delete);



module.exports = router;
