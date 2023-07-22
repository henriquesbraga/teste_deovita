import express from 'express'
import DatabaseSync from "./database/DatabaseSync.js";
import router from './routes.js';
import cors from 'cors'



// Express Application
const app = express();
app.use(cors())
app.use(express.json())
app.use('/', router)


// Sync database tables
DatabaseSync()

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});