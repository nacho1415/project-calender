const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Calendar extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
      },
      {
        modelName: "Calendar",
        tableName: "Calendars",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Calendar.belongsToMany(db.User, {
      through: db.CalendarMember,
      as: "CalendarMembers",
    });
    db.Calendar.belongsTo(db.User, { as: "Owner" });
    db.Calendar.hasMany(db.Invite, {
      as: "HostCalendar",
      foreignKey: "HostCalendarId",
    });
    db.Calendar.hasMany(db.Event);
  }
};