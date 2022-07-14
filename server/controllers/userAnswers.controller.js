const UserAnswer = require("../models").userAnswers;

module.exports = {
  list(req, res) {
    return UserAnswer.findAll()
      .then((userAnswers) => res.status(200).send(userAnswers))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return UserAnswer.findByPk(req.params.id)
      .then((userAnswer) => {
        if (!userAnswer) {
          return res.status(404).send({
            message: "UserAnswer Not Found",
          });
        }
        return res.status(200).send(userAnswer);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return UserAnswer.create({
      user: req.body.user,
      question: req.body.question,
      choice: req.body.choice,
      correct: req.body.correct || false,
    })
      .then((userAnswer) => res.status(201).send(userAnswer))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return UserAnswer.findByPk(req.params.id)
      .then((userAnswer) => {
        if (!userAnswer) {
          return res.status(404).send({
            message: "UserAnswer Not Found",
          });
        }
        return userAnswer
          .update({
            user: req.body.user || userAnswer.user,
            question: req.body.question || userAnswer.question,
            choice: req.body.choice || userAnswer.choice,
            correct: (req.body.correct == undefined) ? userAnswer.correct : req.body.correct
          })
          .then(() => res.status(200).send(userAnswer))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return UserAnswer.findByPk(req.params.id)
      .then((userAnswer) => {
        if (!userAnswer) {
          return res.status(400).send({
            message: "UserAnswer Not Found",
          });
        }
        return userAnswer
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
