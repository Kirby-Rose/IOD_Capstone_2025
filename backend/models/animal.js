import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Animal extends Model {}
Animal.init(
  {
    animalId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
  },
  {
    sequelize: sequelizeInstance,
    modelName: "animal",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Animal;
