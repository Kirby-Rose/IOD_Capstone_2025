import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Profile extends Model {}

Profile.init(
  {
    humanId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    humanName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    fencedYard: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    allowedInside: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    childrenInHouse: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    elderlyVulnerableInHouse: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    otherAnimalsInHouse: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    homeCheck: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    animalBreed: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    energyLevel: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    training: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    exercise: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    medicalCare: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    gestationalCare: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    tableName: "profile",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Profile;
