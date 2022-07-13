var DataTypes = require("sequelize").DataTypes;
var _images = require("./images");
var _questionAnswers = require("./questionAnswers");
var _questions = require("./questions");
var _quizResults = require("./quizResults");
var _quizzes = require("./quizzes");
var _userAnswers = require("./userAnswers");
var _users = require("./users");

function initModels(sequelize) {
  var images = _images(sequelize, DataTypes);
  var questionAnswers = _questionAnswers(sequelize, DataTypes);
  var questions = _questions(sequelize, DataTypes);
  var quizResults = _quizResults(sequelize, DataTypes);
  var quizzes = _quizzes(sequelize, DataTypes);
  var userAnswers = _userAnswers(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  questions.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(questions, { as: "questions", foreignKey: "image"});
  quizzes.belongsTo(images, { as: "image_image", foreignKey: "image"});
  images.hasMany(quizzes, { as: "quizzes", foreignKey: "image"});
  userAnswers.belongsTo(questionAnswers, { as: "choice_questionAnswer", foreignKey: "choice"});
  questionAnswers.hasMany(userAnswers, { as: "userAnswers", foreignKey: "choice"});
  questionAnswers.belongsTo(questions, { as: "question_question", foreignKey: "question"});
  questions.hasMany(questionAnswers, { as: "questionAnswers", foreignKey: "question"});
  userAnswers.belongsTo(questions, { as: "question_question", foreignKey: "question"});
  questions.hasMany(userAnswers, { as: "userAnswers", foreignKey: "question"});
  questions.belongsTo(quizzes, { as: "quiz_quiz", foreignKey: "quiz"});
  quizzes.hasMany(questions, { as: "questions", foreignKey: "quiz"});
  quizResults.belongsTo(quizzes, { as: "quiz_quiz", foreignKey: "quiz"});
  quizzes.hasMany(quizResults, { as: "quizResults", foreignKey: "quiz"});
  quizResults.belongsTo(users, { as: "user_user", foreignKey: "user"});
  users.hasMany(quizResults, { as: "quizResults", foreignKey: "user"});
  quizzes.belongsTo(users, { as: "owner_user", foreignKey: "owner"});
  users.hasMany(quizzes, { as: "quizzes", foreignKey: "owner"});
  userAnswers.belongsTo(users, { as: "user_user", foreignKey: "user"});
  users.hasMany(userAnswers, { as: "userAnswers", foreignKey: "user"});

  return {
    images,
    questionAnswers,
    questions,
    quizResults,
    quizzes,
    userAnswers,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
