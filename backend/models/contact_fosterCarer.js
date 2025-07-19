import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class ContactFosterCarer extends Model {}

ContactFosterCarer.init(
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
    fcApplicationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fcAvailability: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    currentlyFostering: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    tableName: "contact_fosterCarer",
    timestamps: false,
    freezeTableName: true,
  }
);

export default ContactFosterCarer;
