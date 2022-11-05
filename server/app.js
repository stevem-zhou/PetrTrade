// Import the mongoose module
const mongoose = require("mongoose");

// Set up default mongoose connection
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
const announcement = require('./models/announcement.model');
const listing = require('./models/listing.model');

app.use(
    express.urlencoded({ extended: true }),
    express.json(),
  );
  app.use(cors());
  
  app.use('announcement', todosRouter);
  app.use('listing', notesRouter);
  
  app.listen(3001, () => {
    console.log('server listening on port 3001');
  })