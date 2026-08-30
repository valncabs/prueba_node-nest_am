import User from "./User";
import Role from "./Role";
import Task from "./Task";

Role.hasMany(User, {
    foreignKey: "roleId",
});

User.belongsTo(Role, {
    foreignKey: "roleId",
});

User.hasMany(Task, {
    foreignKey: "userId",
});

Task.belongsTo(User, {
    foreignKey: "userId",
});

export {
    User,
    Role,
    Task,
};