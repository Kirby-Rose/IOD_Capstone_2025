import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class Surrendering extends Model {}

Surrendering.init(
  {
    applicationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "surrendering",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Surrendering;
