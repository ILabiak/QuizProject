const express = require("express");
const router = express.Router();

const UserController = require("../controllers").users;
const ImageController = require("../controllers").images;
const QuestionController = require("../controllers").questions;
const QuestionAnswerController = require("../controllers").questionAnswers;

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


// router.get('/api/users/:id', classroomController.getById);

module.exports = router;
