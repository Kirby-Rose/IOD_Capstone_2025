import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Status extends Model {}

Status.init(
  {
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    healthStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    reasonForSurrender: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "status",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Status;
