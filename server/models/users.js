const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: "username"
    },
    passhash: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: "users_email_key"
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'quizschema',
    timestamps: false,
    indexes: [
      {
        name: "userid",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "username",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
