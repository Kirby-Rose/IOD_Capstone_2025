import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Medical extends Model {}

Medical.init(
  {
    desexed: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    vaccination: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    medicalHistory: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    medicalCare: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    ongoingHealthRequrements: {
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
    modelName: "medical",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Medical;
