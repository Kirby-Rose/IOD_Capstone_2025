import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Identify extends Model {}

Identify.init(
  {
    size: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    colour: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    characteristics: {
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
    modelName: "identify",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Identify;
