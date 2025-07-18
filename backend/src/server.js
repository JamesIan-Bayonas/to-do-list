import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import notesRoute from "./routes/notesRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { initializeRatelimit } from "./config/upstash.js";
import rateLimiter from "./middleware/rateLimiter.js";

/* const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFilePath = path.resolve(__dirname, "../.env");  */

//console.log("DEBUG: Attempting to load .env from:", envFilePath);

const result = dotenv.config(/* { path: envFilePath } */);

if (result.error) {
  console.error("DEBUG: dotenv failed to load .env:", result.error);
} else if (result.parsed) {
  console.log("DEBUG: .env variables successfully parsed:", result.parsed);
} else {
  console.log(
    "DEBUG: dotenv.config() ran, but no variables parsed or error reported."
  );
}

what 

/* console.log("Value of REDIS_REST_URL:", process.env.UPSTASH_REDIS_REST_URL);
console.log("Value of REDIS_REST_TOKEN:", process.env.UPSTASH_REDIS_REST_TOKEN); */

// === END DEBUG LOGS ===

const app = express(); // created an instance of express
const PORT = process.env.PORT || 5001;

let ratelimitInstance;
try {
  ratelimitInstance = initializeRatelimit();
  console.log("DEBUG: Upstash Ratelimit instance initialized successfully.");
} catch (error) {
  console.error(
    "ERROR: Failed to initialize Upstash Ratelimit:",
    error.message
  );

  process.exit(1);
}

// :: middleware ::

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json()); // this will parse the incoming request body as JSON via Postman or any other client

// NEW: Create a middleware that injects the ratelimit instance
app.use((req, res, next) => {
  req.ratelimit = ratelimitInstance; // Attach the ratelimit instance to the request object
  next();
});

app.use(
  rateLimiter
); /* :: this is used to showcase how req and res work's in express under the hood :: */ // Apply the rate limiter middleware

/* app.use((req, _, next) => {
  console.log(
    `This is the Method used ${req.method} and this is the URL request${req.url}`
  );
  next();
}); */
app.use("/api/notes", notesRoute);

connectDB().then(() => {
  // it first checks the database connection thus right after connecting it.
  app.listen(PORT, () => {
    console.log("Server started on PORT,", PORT);
  });
});

//
