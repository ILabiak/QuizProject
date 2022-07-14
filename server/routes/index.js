const express = require("express");
const router = express.Router();

const UserController = require("../controllers").users;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Users Router */
router.get("/api/users", UserController.getById);
router.get("/api/users/:id", UserController.getById);
router.post("/api/users", UserController.add);
router.put('/api/users/:id', UserController.update);
router.delete('/api/users/:id', UserController.delete);


// router.get('/api/users/:id', classroomController.getById);

module.exports = router;
