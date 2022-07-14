const Quiz = require("../models").quizzes;

module.exports = {
  list(req, res) {
    return Quiz.findAll()
      .then((quizzes) => res.status(200).send(quizzes))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return Quiz.findByPk(req.params.id)
      .then((quiz) => {
        if (!quiz) {
          return res.status(404).send({
            message: "Quiz Not Found",
          });
        }
        return res.status(200).send(quiz);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return Quiz.create({
      owner: req.body.owner,
      title: req.body.title,
      description: req.body.description || null,
      image: req.body.image || null
    })
      .then((quiz) => res.status(201).send(quiz))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Quiz.findByPk(req.params.id)
      .then((quiz) => {
        if (!quiz) {
          return res.status(404).send({
            message: "Quiz Not Found",
          });
        }
        return quiz
          .update({
            owner: req.body.owner || quiz.owner,
            title: req.body.title || quiz.title,
            description: req.body.description || quiz.description,
            image: req.body.image || quiz.image
          })
          .then(() => res.status(200).send(quiz))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Quiz.findByPk(req.params.id)
      .then((quiz) => {
        if (!quiz) {
          return res.status(400).send({
            message: "Quiz Not Found",
          });
        }
        return quiz
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
