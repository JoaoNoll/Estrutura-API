import Sequelize from 'sequelize';
import 'dotenv/config';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
