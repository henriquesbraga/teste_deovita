import  Database  from './DatabaseConnection.js';


const DatabaseSync = () => {
  Database.sync({ force: true }) // Set force to true to drop and recreate tables on every restart
  .then(() => {
    console.log('Database and tables are synced.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
}

export default DatabaseSync