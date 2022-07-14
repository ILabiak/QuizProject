const express = require("express");
const router = express.Router();

const UserController = require("../controllers").users;
const ImageController = require("../controllers").images;

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


// router.get('/api/users/:id', classroomController.getById);

module.exports = router;
