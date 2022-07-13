const express = require("express");
const router = express.Router();

const UserController = require("../controllers").users;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Users Router */
router.get("/api/users", UserController.list);
// router.get('/api/users/:id', classroomController.getById);

module.exports = router;
