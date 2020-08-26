import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

let dbUrl = process.env.DATABASE_URL.split(/[@\/:]/);

export default {
  development: {
    username: dbUrl[3],
    password: dbUrl[4],
    database: dbUrl[7],
    host: dbUrl[5],
    dialect: 'postgres',
    dialectOptions: { ssl: false },
  },
  staging: {
    username: dbUrl[3],
    password: dbUrl[4],
    database: dbUrl[7],
    host: dbUrl[5],
    dialect: 'postgres',
    dialectOptions: { ssl: true },
  },
  production: {
    username: dbUrl[3],
    password: dbUrl[4],
    database: dbUrl[7],
    host: dbUrl[5],
    dialect: 'postgres',
    dialectOptions: { ssl: true },
  },
};
