import sequelize from "../config/database";
import {
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model
} from "sequelize";

class Task extends Model<InferAttributes<Task>,InferCreationAttributes<Task>> {
    declare id: number;
    declare title: string;
    declare description: string;
    declare status: string;
    declare userId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending"
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },

        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: "tasks",
        timestamps: true
    }
);

export default Task;