module.exports = function (sequelize, DataTypes) {
    const Content = sequelize.define('Content', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Content.associate = function (models) {
    // We're saying that a Note should belong to an User
    // A Note can't be created without an User due to the foreign key constraint
        Content.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Content;
};
