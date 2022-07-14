const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quizResults', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    quiz: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'quizzes',
        key: 'id'
      }
    },
    correctAnswers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    questionsAmount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quizResults',
    schema: 'quizschema',
    timestamps: false
  });
};
