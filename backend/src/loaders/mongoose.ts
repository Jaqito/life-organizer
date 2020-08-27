import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';
import Logger from './logger';

export default async (): Promise<Db> => {
  try {
    const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
    return connection.connection.db;
  } catch (e) {
    Logger.error(e);
    throw e;
  }
};
