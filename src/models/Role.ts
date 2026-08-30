import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Role extends Model{
    declare id: number;
    declare name: string;
}

Role.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
},{
    sequelize,
    tableName: "roles",
    timestamps: true,
});