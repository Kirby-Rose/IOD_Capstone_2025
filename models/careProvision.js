import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class CareProvision extends Model {}

CareProvision.init(
  {
    animal: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    energyLevel: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    training: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    exercise: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    medicalCare: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    gestationalCare: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "careProvision",
    timestamps: false,
    freezeTableName: true,
  }
);

export default CareProvision;
