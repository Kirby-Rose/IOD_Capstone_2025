import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Personality extends Model {}

Personality.init(
  {
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    livedWithChildren: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    anxiety: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    aggression: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    energyLevel: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    exerciseRoutine: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    trainingReceived: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    otherInfo: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "personality",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Personality;
