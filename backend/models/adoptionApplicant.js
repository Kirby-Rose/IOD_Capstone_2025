import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class AdoptionApplicant extends Model {}

AdoptionApplicant.init(
  {
    aaApplicationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    aaAvailability: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    willTravel: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    willViewAlternates: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "adoptionApplicant",
    timestamps: false,
    freezeTableName: true,
  }
);

export default AdoptionApplicant;
