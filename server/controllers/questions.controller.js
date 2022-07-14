const Question = require("../models").questions;

module.exports = {
  list(req, res) {
    return Question.findAll()
      .then((questions) => res.status(200).send(questions))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return Question.findByPk(req.params.id)
      .then((question) => {
        if (!question) {
          return res.status(404).send({
            message: "Question Not Found",
          });
        }
        return res.status(200).send(question);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return Question.create({
      quiz: req.body.quiz,
      text: req.body.text,
      image: req.body.image || null,
      active: req.body.active,
    //createdAt, updatedAt creates automatically
    })
      .then((question) => res.status(201).send(question))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Question.findByPk(req.params.id)
      .then((question) => {
        if (!question) {
          return res.status(404).send({
            message: "Question Not Found",
          });
        }
        return question
          .update({
            quiz: req.body.quiz || question.quiz,
            text: req.body.text || question.text,
            image: req.body.image || question.image,
            active: (req.body.active == undefined) ? question.active : req.body.active,
          })
          .then(() => res.status(200).send(question))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Question.findByPk(req.params.id)
      .then((question) => {
        if (!question) {
          return res.status(400).send({
            message: "Question Not Found",
          });
        }
        return question
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
