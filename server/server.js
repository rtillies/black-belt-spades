/* SETUP */
// require statements
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorHandler')
const app = express();
dotenv.config(); // environment variables (.env)

// Import Schemas
const Conference = require('./db/Conference');
const Division = require('./db/Division');
const Team = require('./db/Team');
const Game = require('./db/Game');

// Import data to populate database
const conferences = require('./data/conferences');
const divisions = require('./data/divisions');
const teams = require('./data/teams');
const games = require('./data/games');

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler);
app.use(cors({
  origin: true,
  credentials: true,
}));

// Routes
app.use('/api/conferences', require('./routes/conferenceRoutes'))
app.use('/api/divisions', require('./routes/divisionRoutes'))
app.use('/api/teams', require('./routes/teamRoutes'))
app.use('/api/games', require('./routes/gameRoutes'))

// Main function: 
// listen to port, connect to database, populate database
async function main() {
  portListen();
  connectDB();

  // populate database
  populateDB(conferences, Conference)
  populateDB(divisions, Division)
  populateDB(teams, Team)
  populateDB(games, Game)
}

async function addToDB(item, model) {
  try {
    const newItem = await model.create(item);
  } catch (e) {
    console.log(e.message);
  }
}

async function populateDB(array, model) {
  array.forEach(element => {
    addToDB(element, model)
  });
}

function portListen() {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
  })
}

// Need connection string
async function connectDB() {
  const URI = '<connectionString>' // or use .env file
  const conn = mongoose.connect(process.env.ATLAS_URI || URI)
    .then(console.log(`Connected!`))
    .catch(e => console.error(e.message));
}

// Run
main();