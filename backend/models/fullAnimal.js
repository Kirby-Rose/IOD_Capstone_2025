import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class FullAnimal extends Model {}

FullAnimal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    animal: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    petName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    photoURL: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    healthStatus: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    reasonForSurrender: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    colour: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    characteristics: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    livedWithChildren: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    anxiety: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    aggression: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    energyLevel: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    exerciseRoutine: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    trainingReceived: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    // Mapping personality.otherInfo as otherInfo in this model
    otherInfo: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    desexed: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    vaccination: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    medicalHistory: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    medicalCare: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ongoingHealthRequrements: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    tableName: "fullAnimal",
    timestamps: false,
    freezeTableName: true,
  }
);

export default FullAnimal;
