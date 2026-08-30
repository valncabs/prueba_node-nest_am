import User from "./User";
import Role from "./Role";


Role.hasMany(User, {
    foreignKey: "roleId",
});

User.belongsTo(Role, {
    foreignKey: "roleId",
});


export {
    User,
    Role,
};