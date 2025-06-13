import express from "express"; // imports the framework:: (express.js) and take note that express is a function
import notesRoute from "./routes/notesRoute.js"; // import the notesRouter from the notesRoute file
import { connectDB } from "./config/db.js"; // import the connectBD function from the db.js file
import dotenv from "dotenv"; // import dotenv to use environment variables

dotenv.config(); // this will load the environment variables from the .env file

const app = express(); // created an instance of express
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json()); // this will parse the incoming request body as JSON via Postman or any other client
app.use("/api/notes", notesRoute); // this is how we use the notesRouter in our app

app.listen(5001, () => {
  console.log("Server started on PORT:: 5001");
});
