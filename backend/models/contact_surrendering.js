import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class ContactSurrendering extends Model {}

ContactSurrendering.init(
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
    suApplicationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    animalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },

  {
    sequelize: sequelizeInstance,
    tableName: "contact_surrendering",
    timestamps: false,
    freezeTableName: true,
  }
);

export default ContactSurrendering;
