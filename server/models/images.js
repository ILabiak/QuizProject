const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('images', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    imageurl: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'images',
    schema: 'quizschema',
    timestamps: false,
    indexes: [
      {
        name: "images_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
