import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class FosterCarer extends Model {}

FosterCarer.init(
  {
    applicationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    homeCheck: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    currentlyFostering: {
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
    modelName: "fosterCarer",
    timestamps: false,
    freezeTableName: true,
  }
);

export default FosterCarer;
