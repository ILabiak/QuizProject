const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    quiz: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'quizzes',
        key: 'id'
      }
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    image: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'images',
        key: 'id'
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'questions',
    schema: 'quizschema',
    timestamps: true,
    indexes: [
      {
        name: "questions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
