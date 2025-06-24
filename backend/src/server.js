import express from "express"; // imports the framework:: (express.js) and take note that express is a function
import notesRoute from "./routes/notesRoute.js"; // import the notesRouter from the notesRoute file
import { connectDB } from "./config/db.js"; // import the connectBD function from the db.js file
import dotenv from "dotenv"; // import dotenv to use environment variables
//import rateLimiter from ".middleware/rateLimiter.js"; // import the rateLimiter middleware

dotenv.config({ path: "../.env" }); // this will load the environment variables from the .env file

const app = express(); // created an instance of express
const PORT = process.env.PORT || 5001;

connectDB();

//  :: middleware ::
app.use(express.json()); // this will parse the incoming request body as JSON via Postman or any other client

//  :: this is used to showcase how req and res work's in express behind the hood ::
app.use((req, res, next) => {
  console.log(
    `This is the Method used ${req.method} and this is the URL request${req.url}`
  );
  next();
});
app.use("/api/notes", notesRoute); // this is how we use the notesRouter in our app

app.listen(5001, () => {
  console.log("Server started on PORT:: 5001");
});

// figure out how to connect MongoDB which is from the postman to the database in this case
