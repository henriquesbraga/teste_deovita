import  Database  from './DatabaseConnection.js';


const DatabaseSync = () => {
  Database.sync({ force: false })
  .then(() => {
    console.log('Database and tables are synced.');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
}

export default DatabaseSync