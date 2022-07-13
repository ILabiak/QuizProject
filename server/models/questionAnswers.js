const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questionAnswers', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    correct: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'questionAnswers',
    schema: 'quizschema',
    timestamps: true,
    indexes: [
      {
        name: "questionAnswers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
