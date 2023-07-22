import { Sequelize } from 'sequelize';

const Database = new Sequelize('pgtesteaf', 'henrique', '1234', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
});

export default Database;
