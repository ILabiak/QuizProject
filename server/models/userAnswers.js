const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userAnswers', {
    user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    choice: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'questionAnswers',
        key: 'id'
      }
    },
    correct: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userAnswers',
    schema: 'quizschema',
    timestamps: false
  });
};
