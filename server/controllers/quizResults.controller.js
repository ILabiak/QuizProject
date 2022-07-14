const QuizResult = require("../models").quizResults;

module.exports = {
  list(req, res) {
    return QuizResult.findAll()
      .then((quizResults) => res.status(200).send(quizResults))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return QuizResult.findByPk(req.params.id)
      .then((quizResult) => {
        if (!quizResult) {
          return res.status(404).send({
            message: "QuizResult Not Found",
          });
        }
        return res.status(200).send(quizResult);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return QuizResult.create({
      user: req.body.user,
      quiz: req.body.quiz,
      correctAnswers: req.body.correctAnswers || null,
      questionsAmount: req.body.questionsAmount || null
    })
      .then((quizResult) => res.status(201).send(quizResult))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return QuizResult.findByPk(req.params.id)
      .then((quizResult) => {
        if (!quizResult) {
          return res.status(404).send({
            message: "QuizResult Not Found",
          });
        }
        return quizResult
          .update({
            user: req.body.user || quizResult.user,
            quiz: req.body.quiz || quizResult.quiz,
            correctAnswers: req.body.correctAnswers || quizResult.correctAnswers,
            questionsAmount: req.body.questionsAmount || quizResult.questionsAmount
          })
          .then(() => res.status(200).send(quizResult))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return QuizResult.findByPk(req.params.id)
      .then((quizResult) => {
        if (!quizResult) {
          return res.status(400).send({
            message: "QuizResult Not Found",
          });
        }
        return quizResult
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
