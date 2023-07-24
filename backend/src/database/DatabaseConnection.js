import { Sequelize } from 'sequelize';

const Database = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
});

export default Database;
