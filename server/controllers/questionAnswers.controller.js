const QuestionAnswer = require("../models").questionAnswers;

module.exports = {
  list(req, res) {
    return QuestionAnswer.findAll()
      .then((questionAnswers) => res.status(200).send(questionAnswers))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return QuestionAnswer.findByPk(req.params.id)
      .then((questionAnswer) => {
        if (!questionAnswer) {
          return res.status(404).send({
            message: "QuestionAnswer Not Found",
          });
        }
        return res.status(200).send(questionAnswer);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return QuestionAnswer.create({
      question: req.body.question,
      answer: req.body.answer,
      correct: req.body.correct || false
    })
      .then((questionAnswer) => res.status(201).send(questionAnswer))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return QuestionAnswer.findByPk(req.params.id)
      .then((questionAnswer) => {
        if (!questionAnswer) {
          return res.status(404).send({
            message: "QuestionAnswer Not Found",
          });
        }
        return questionAnswer
          .update({
            question: req.body.question || questionAnswer.question,
            answer: req.body.answer || questionAnswer.answer,
            correct: (req.body.correct == undefined) ? questionAnswer.correct : req.body.correct,
          })
          .then(() => res.status(200).send(questionAnswer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return QuestionAnswer.findByPk(req.params.id)
      .then((questionAnswer) => {
        if (!questionAnswer) {
          return res.status(400).send({
            message: "QuestionAnswer Not Found",
          });
        }
        return questionAnswer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
