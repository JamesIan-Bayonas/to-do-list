import express from "express"; // imports the framework:: (express.js) and take note that express is a function
import path from "path";
import { fileURLToPath } from "url";
import notesRoute from "./routes/notesRoute.js"; // import the notesRouter from the notesRoute file
import { connectDB } from "./config/db.js"; // import the connectBD function from the db.js file
import dotenv from "dotenv"; // import dotenv to use environment variables
import rateLimiter from "./middleware/rateLimiter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// :: IMPORTANT: THESE DEBUG LOGS ARE CRITICAL ::
const envFilePath = path.resolve(__dirname, "../../.env");
console.log("DEBUG: Attempting to load .env from:", envFilePath);
const result = dotenv.config({ path: envFilePath });

if (result.error) {
  console.error("DEBUG: dotenv failed to load .env:", result.error);
} else if (result.parsed) {
  console.log("DEBUG: .env variables successfully parsed:", result.parsed);
} else {
  console.log(
    "DEBUG: dotenv.config() ran, but no variables parsed or error reported (file might be empty or inaccessible)."
  );
}

/*:: console.log(
  "DEBUG: Value of UPSTASH_REDIS_REST_URL from process.env:",
  process.env.UPSTASH_REDIS_REST_URL
); :: important might be use in the future*/

// === END DEBUG LOGS ===

//dotenv.config({ path: "../.env" }); // this will load the environment variables from the .env file

const app = express(); // created an instance of express
const PORT = process.env.PORT || 5001;

connectDB();

//  :: middleware ::
app.use(express.json()); // this will parse the incoming request body as JSON via Postman or any other client
app.use(rateLimiter);

//  :: this is used to showcase how req and res work's in express under the hood ::
app.use((req, _, next) => {
  console.log(
    `This is the Method used ${req.method} and this is the URL request${req.url}`
  );
  next();
});
app.use("/api/notes", notesRoute); // this is how we use the notesRouter in our app

app.listen(5001, () => {
  console.log("Server started on PORT,", PORT);
});
