import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class HomeYard extends Model {}

HomeYard.init(
  {
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
    humanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "homeYard",
    timestamps: false,
    freezeTableName: true,
  }
);

export default HomeYard;
