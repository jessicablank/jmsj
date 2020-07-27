module.exports = function(sequelize, DataTypes) {
  const Binge = sequelize.define("Binge", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    presentlyWatching: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    alreadyWatched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Binge.associate = function(models) {
    // We're saying that a Binge should belong to an User
    // A Binge can't be created without a User due to the foreign key constraint
    Binge.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Binge;
};