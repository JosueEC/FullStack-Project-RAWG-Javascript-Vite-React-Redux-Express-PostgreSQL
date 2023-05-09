const { DataTypes } = require('sequelize')

module.exports = (database) => {
  database.define('genre', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [2, 50]
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: true,
        len: [2, 50]
      }
    },
    games_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
        isInt: true
      }
    },
    image_background: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: '',
      validate: {
        len: [10, 1100]
      }
    }
  }, {
    timestamps: false
  })
}