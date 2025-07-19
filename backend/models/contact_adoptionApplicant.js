import { DataTypes, Model } from "sequelize";
import sequelize from "../dbConnect.js";

const sequelizeInstance = sequelize;

class ContactAdoptionApplicant extends Model {}

ContactAdoptionApplicant.init(
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
    aaApplicationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    aaAvailability: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    willTravel: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    willViewAlternates: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    tableName: "contact_adoptionApplicant",
    timestamps: false,
    freezeTableName: true,
  }
);

export default ContactAdoptionApplicant;
