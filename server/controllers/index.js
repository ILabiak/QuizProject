const users = require('./users.controller');
const images = require('./images.controller');
const questions = require('./questions.controller');
const questionAnswers = require('./questionAnswers.controller');
const quizzes = require('./quizzes.controller');

module.exports = {
    users, images, questions, questionAnswers, quizzes
};