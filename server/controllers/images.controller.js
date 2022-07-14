const Image = require("../models").images;

module.exports = {
  list(req, res) {
    return Image.findAll()
      .then((images) => res.status(200).send(images))
      .catch((error) => {
        res.status(400).send(error);
      });
  },
  getById(req, res) {
    return Image.findByPk(req.params.id)
      .then((image) => {
        if (!image) {
          return res.status(404).send({
            message: "Image Not Found",
          });
        }
        return res.status(200).send(image);
      })
      .catch((error) => res.status(400).send(error));
  },
  add(req, res) {
    return Image.create({
      imageurl: req.body.imageurl
    })
      .then((image) => res.status(201).send(image))
      .catch((error) => res.status(400).send(error));
  },
  update(req, res) {
    return Image.findByPk(req.params.id)
      .then((image) => {
        if (!image) {
          return res.status(404).send({
            message: "Image Not Found",
          });
        }
        return image
          .update({
            imageurl: req.body.imageurl || image.imageurl,
          })
          .then(() => res.status(200).send(image))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Image.findByPk(req.params.id)
      .then((image) => {
        if (!image) {
          return res.status(400).send({
            message: "Image Not Found",
          });
        }
        return image
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
