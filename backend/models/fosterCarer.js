import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class FosterCarer extends Model {}

FosterCarer.init(
  {
    fcApplicationDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fcAvailability: {
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
