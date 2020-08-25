import Sequelize from 'sequelize';
// import { sequelize } from '../database/db';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {},
  );
  return User;
};

export default User;
